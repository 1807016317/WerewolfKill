/*
*	title: room_server
*	desc: room service
*	auth: wangquanyou
*	date: 2020/07/02 周四
*/
let crypto = require('../util/crypto');
let express = require('express');
let db = require('../dbConn/dbConn');
let httpMgr = require("../util/httpMgr");
let https = require('https');
let app = express();

let hallIp = null;
let config = null;
let rooms = {};
let serverMap = {};
let roomIdOfUsers = {};

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

/**
* 游客注册
*/
app.get('/register_gs',function(req,res){
	
	let ip = req.ip;
	let clientip = req.query.clientip;
	let clientport = req.query.clientport;
	let httpPort = req.query.httpPort;
	let load = req.query.load;
	let id = clientip + ":" + clientport;

	if(serverMap[id]){
		let info = serverMap[id];
		if(info.clientport != clientport
			|| info.httpPort != httpPort
			|| info.ip != ip
		){
			console.log("duplicate gsid:" + id + ",addr:" + ip + "(" + httpPort + ")");
			httpMgr.send(res,1,"duplicate gsid:" + id);
			return;
		}
		info.load = load;
		httpMgr.send(res,0,"ok",{ip:ip});
		return;
	}
	serverMap[id] = {
		ip:ip,
		id:id,
		clientip:clientip,
		clientport:clientport,
		httpPort:httpPort,
		load:load
	};
	httpMgr.send(res,0,"ok",{ip:ip});
	console.log("game server registered.\n\tid:" + id + "\n\taddr:" + ip + "\n\thttp port:" + httpPort + "\n\tsocket clientport:" + clientport);

	let reqdata = {
		serverid:id,
		sign:crypto.md5(id+config.ROOM_PRI_KEY)
	};
	//获取服务器信息
	httpMgr.get(ip,httpPort,"/get_server_info",reqdata,function(ret,data){
		if(ret && data.errcode == 0){
			for(let i = 0; i < data.userroominfo.length; i += 2){
				let userId = data.userroominfo[i];
				let roomId = data.userroominfo[i+1];
			}
		}
		else{
			console.log(data.errmsg);
		}
	});
});

/**
* 选择服务器
*/
function chooseServer(){
	let serverinfo = null;
	for(let s in serverMap){
		let info = serverMap[s];
		if(serverinfo == null){
			serverinfo = info;			
		}
		else{
			if(serverinfo.load > info.load){
				serverinfo = info;
			}
		}
	}	
	return serverinfo;
}

/**
* 创建房间
*/
exports.createRoom = function(account,userId,roomConf,fnCallback){
	let serverinfo = chooseServer();
	if(serverinfo == null){
		fnCallback(101,null);
		return;
	}
	
	db.get_gems(account,function(data){
		if(data != null){
			//2、请求创建房间
			let reqdata = {
				userid:userId,
				gems:data.gems,
				conf:roomConf
			};
			reqdata.sign = crypto.md5(userId + roomConf + data.gems + config.ROOM_PRI_KEY);
			httpMgr.getByOpt(serverinfo.ip,serverinfo.httpPort,"/create_room",reqdata,function(ret,data){
				//console.log(data);
				if(ret){
					if(data.errcode == 0){
						fnCallback(0,data.roomid);
					}
					else{
						fnCallback(data.errcode,null);		
					}
					return;
				}
				fnCallback(102,null);
			});	
		}
		else{
			fnCallback(103,null);
		}
	});
};

exports.enterRoom = function(userId,name,roomId,fnCallback){
	let reqdata = {
		userid:userId,
		name:name,
		roomid:roomId
	};
	reqdata.sign = crypto.md5(userId + name + roomId + config.ROOM_PRI_KEY);

	let checkRoomIsRuning = function(serverinfo,roomId,callback){
		let sign = crypto.md5(roomId + config.ROOM_PRI_KEY);
		httpMgr.get(serverinfo.ip,serverinfo.httpPort,"/is_room_runing",{roomid:roomId,sign:sign},function(ret,data){
			if(ret){
				if(data.errcode == 0 && data.runing == true){
					callback(true);
				}
				else{
					callback(false);
				}
			}
			else{
				callback(false);
			}
		});
	}

	let enterRoomReq = function(serverinfo){
		httpMgr.get(serverinfo.ip,serverinfo.httpPort,"/enter_room",reqdata,function(ret,data){
			console.log(data);
			if(ret){
				if(data.errcode == 0){
					db.set_room_id_of_user(userId,roomId,function(ret){
						fnCallback(0,{
							ip:serverinfo.clientip,
							port:serverinfo.clientport,
							token:data.token
						});
					});
				}
				else{
					console.log(data.errmsg);
					fnCallback(data.errcode,null);
				}
			}
			else{
				fnCallback(-1,null);
			}
		});
	};

	let chooseServerAndEnter = function(serverinfo){
		serverinfo = chooseServer();
		if(serverinfo != null){
			enterRoomReq(serverinfo);
		}
		else{
			fnCallback(-1,null);					
		}
	}

	db.get_room_addr(roomId,function(ret,ip,port){
		if(ret){
			let id = ip + ":" + port;
			let serverinfo = serverMap[id];
			if(serverinfo != null){
				checkRoomIsRuning(serverinfo,roomId,function(isRuning){
					if(isRuning){
						enterRoomReq(serverinfo);
					}
					else{
						chooseServerAndEnter(serverinfo);
					}
				});
			}
			else{
				chooseServerAndEnter(serverinfo);
			}
		}
		else{
			fnCallback(-2,null);
		}
	});
};

exports.start = function($config){
	config = $config;
	//app.listen(config.ROOM_PORT,config.FOR_ROOM_IP);
	//console.log("room service is listening on " + config.FOR_ROOM_IP + ":" + config.ROOM_PORT);
	//创建https服务器
	let httpsServer = https.createServer(config.CRT, app);

	httpsServer.listen(config.ROOM_PORT, function () {
		//console.log('room Server is running on: %s', config.HALL_IP + ":" + config.FOR_ROOM_IP);
		console.log('room Server is running on: %s', config.HALL_IP + ":" + config.ROOM_PORT);
	});
};