/*
*	title: account_server
*	desc: account server main API
*	auth: wangquanyou
*	date: 2020/06/16 
*/

//express 默认是一个 http 协议的服务器框架

let crypto = require('../util/crypto');
let express = require('express');
const {dbConnInstance} = require('../dbConn/dbConn');
let httpMgr = require("../util/httpMgr");
let fibers = require('fibers'); //nodejs协程模块
let http = require('http');
let https = require('https');

let app = express();
let hallAddr = "";
let config = null;

/**
 * app 信息
 */
let appInfo = {
	Android: {
		appid: "wxb480ce3068430d31",
		secret: "f34a830cadb6797e4ea9d6684d5b3730",
	},
	iOS: {
		appid: "wxb480ce3068430d31",
		secret: "f34a830cadb6797e4ea9d6684d5b3730",
	},
	wxmini: {
		appid: "wxb480ce3068430d31",
		secret: "f34a830cadb6797e4ea9d6684d5b3730",
	}
};

/**
 * 
 * @param {*} res 
 * @param {*} ret 
 */
function send(res, ret) {
	let str = JSON.stringify(ret);
	res.send(str)
}

/**
 * 
 * @param {*} cfg 
 */
exports.start = function (cfg) {
	config = cfg;
	hallAddr = config.HALL_IP + ":" + config.HALL_CLIENT_PORT;

	//创建HTTPS服务器
	let httpsServer = https.createServer(config.CRT, app);
	httpsServer.listen(config.CLIENT_PORT_HTTPS, function () {
		console.log('account Server is running on: %s', config.HALL_IP + ":" + config.CLIENT_PORT_HTTPS);
	});
	//app.listen(config.CLIENT_PORT);
}

//设置跨域访问
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	fibers(function () {
		next();
	}).run();
});

/**
 * 获取当前客户端版本号
 */
app.get('/get_version', function (req, res) {
	let ret = {
		version: config.VERSION,
	}
	send(res, ret);
});

/**
 * 获取当前服务器版本号
 */
app.get('/get_serverinfo', function (req, res) {
	let ret = {
		version: config.VERSION,
		hall: hallAddr,
		appweb: config.APP_WEB,
	}
	send(res, ret);
});

/**
 * 微信小游戏首次进入授权存储接口
 * app 注册接口
 */
app.get('/register', function (req, res) {
	let account = req.query.account;
	let password = req.query.password;

	let fnFailed = function () {
		send(res, { errcode: 1, errmsg: "account has been used." });
	};

	let fnSucceed = function () {
		send(res, { errcode: 0, errmsg: "ok" });
	};

	dbConnInstance().is_user_exist(account, function (exist) {
		if (exist) {
			dbConnInstance().create_account(account, password, function (ret) {
				if (ret) {
					fnSucceed();
				}
				else {
					fnFailed();
				}
			});
		}
		else {
			fnFailed();
			console.log("account has been used.");
		}
	});
});

/**
 * 微信登录凭证校验
 * @param {*} code 
 * @param {*} os 
 * @param {*} callback 
 */
function get_session_key(code, os, callback) {
	let info = appInfo[os];
	if (info == null) {
		callback(false, null);
	}
	let data = {
		appid: info.appid, //小程序 appId
		secret: info.secret, //小程序 appSecret
		js_code: code, //登录时获取的 code
		grant_type: "authorization_code" //授权类型，此处只需填写 authorization_code
	};

	httpMgr.getByUrl("https://api.weixin.qq.com/sns/jscode2session", data, callback, true);
}

/**
 * 获取状态信息
 * @param {*} access_token 
 * @param {*} openid 
 * @param {*} callback 
 */
function get_state_info(access_token, openid, callback) {
	let data = {
		access_token: access_token,
		openid: openid
	};

	//httpMgr.get2("https://api.weixin.qq.com/sns/userinfo",data,callback,true);
}

/**
 * 获取小程序全局唯一后台接口调用凭据(access_token)
 * @param {*} os 
 * @param {*} callback 
 */
function get_access_token(os, callback) {
	let info = appInfo[os];
	if (info == null) {
		callback(false, null);
	}
	let data = {
		grant_type: "client_credential",
		appid: info.appid, //小程序 appId
		secret: info.secret, //小程序 appSecret
	};

	httpMgr.getByUrl("https://api.weixin.qq.com/cgi-bin/token", data, callback, true);
}

/**
 * 创建用户
 * @param {*} account 
 * @param {*} name 
 * @param {*} sex 
 * @param {*} headimgurl 
 * @param {*} callback 
 */
function create_user(query, callback) {
	let coins = 1000;
	let gems = 21;
	os = 'wxmini';
	get_access_token(os, function (success, result) {
		if (success) {
			query['token'] = result.access_token;
			dbConnInstance().is_user_exist(query.openid, function (ret) {
				if (!ret) {
					dbConnInstance().create_user(query, function (ret) {
						callback();
					});
				}
				// else {
				// 	dbConnInstance().update_user_info(account, name, headimgurl, sex, function (ret) {
				// 		callback();
				// 	});
				// }
			});
		}
	});
};

/**
 * 微信小游戏登录凭证校验
 */
app.get('/wxmini_auth', function (req, res) {
	let code = req.query.code;
	let os = req.query.os;
	if (code == null || code == "" || os == null || os == "") {
		return;
	}
	get_session_key(code, os, function (suc, data) {
		if (suc) {
			let session_key = data.session_key;
			let openid = data.openid;
			console.log("openid:" + openid);
			// get_state_info(access_token, openid, function (suc2, data2) {
			// 	if (suc2) {
			// 		let openid = data2.openid;
			// 		let nickname = data2.nickname;
			// 		let sex = data2.sex;
			// 		let headimgurl = data2.headimgurl;
			// 		let account = "wx_" + openid;
			// 		create_user(account, nickname, sex, headimgurl, function () {
			// 			let sign = crypto.md5(account + req.ip + config.ACCOUNT_PRI_KEY);
			// 			let ret = {
			// 				errcode: 0,
			// 				errmsg: "ok",
			// 				account: account,
			// 				halladdr: hallAddr,
			// 				sign: sign
			// 			};
			// 			send(res, ret);
			// 		});
			// 	}
			// });
			let extraJson = {
				openid: openid,
			}
			let ret = { retcode: 0, msg: "success" }
			send(res, { ret: ret, extraJson: extraJson });
		}
		else {
			let ret = { retcode: data.errcode, msg: data.errmsg }
			send(res, ret);
		}
	});
});

app.get('/save_userInfo', function (req, res) {
	if(req.query == null || req.query == ""){
		send(res, { retcode: -1, msg: "params is null" });
		return;
	}
	create_user(req.query, function (ret) {
		console.log(ret);
	})
})

/**
 * 获取用户基础信息
 */
app.get('/base_info', function (req, res) {
	let userid = req.query.userid;
	dbConnInstance().get_user_base_info(userid, function (data) {
		let ret = {
			errcode: 0,
			errmsg: "ok",
			name: data.name,
			sex: data.sex,
			headimgurl: data.headimg
		};
		send(res, ret);
	});
});

/**
 * 加载图片
 */
app.get('/image', function (req, res) {
	let url = req.query.url;
	if (!url) {
		httpMgr.send(res, 1, 'invalid url', {});
		return;
	}
	if (url.search('http://') != 0 && url.search('https://') != 0) {
		httpMgr.send(res, 1, 'invalid url', {});
		return;
	}

	url = url.split('.jpg')[0];


	let safe = url.search('https://') == 0;
	console.log(url);
	let ret = httpMgr.getSync(url, null, safe, 'binary');
	if (!ret.type || !ret.data) {
		httpMgr.send(res, 1, 'invalid url', true);
		return;
	}
	res.writeHead(200, { "Content-Type": ret.type });
	res.write(ret.data, 'binary');
	res.end();
});