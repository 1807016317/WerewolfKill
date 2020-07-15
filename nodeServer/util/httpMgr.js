/*
*	title: httpMgr
*	desc: http request funtion
*	auth: wangquanyou
*	date: 2020/06/17 
*/
let http = require('http');
let https = require('https');
let qs = require('querystring');
let fibers = require('fibers');
const { clearScreenDown } = require('readline');

String.prototype.format = function(args) {
	let result = this;
	if (arguments.length > 0) {
		if (arguments.length == 1 && typeof (args) == "object") {
			for (let key in args) {
				if(args[key]!=undefined){
					let reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[key]);
				}
			}
		}
		else {
			for (let i = 0; i < arguments.length; i++) {
				if (arguments[i] != undefined) {
					//let reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
					let reg = new RegExp("({)" + i + "(})", "g");
					result = result.replace(reg, arguments[i]);
				}
			}
		}
	}
	return result;
};

getSync = function (url,data,safe,encoding) {
	let content = qs.stringify(data);
	url = url + '?' + content;
	let proto = http;
	if(safe){
		proto = https;
	}

	if(!encoding){
		encoding = 'utf8';
	}
	let ret = {
		err:null,
		data:null,
	};

	let f = fibers.current;

	let req = proto.get(url, function (res) {  
		//console.log('STATUS: ' + res.statusCode);  
		//console.log('HEADERS: ' + JSON.stringify(res.headers));  
		res.setEncoding(encoding);
		let body = '';

		ret.type = res.headers["content-type"];
		res.on('data', function (chunk) {
			body += chunk;
			
		});

		res.on('end',function(){
			if(encoding != 'binary'){
				try {
						
					ret.data = JSON.parse(body);
					f.run();
				} catch(e) {
					console.log('JSON parse error: ' + e + ', url: ' + url);
				}
			}
			else{
				ret.data = body;
				f.run();
			}
		});
	});
	  
	req.on('error', function (e) {  
		console.log('problem with request: ' + e.message);
		ret.err = e;
		f.run();
	});
	  
	req.end();

	fibers.yield();
	return ret;
};

module.exports = class httpMgr {
    /*
    * @funtion -
    * host：域名
    * port：端口号
    * path：域名
    * data：数据
    * callback：回调函数
    * */
    static post(host, port, path, data, callback) {
        //数据转码
        let content = qs.stringify(data);
        //数据包详细参数
        let options = {  
            hostname: host,  
            port: port,  
            path: path + '?' + content,  
            method:'GET'
        };  
          
        let req = http.request(options, function (res) {  
            console.log('STATUS: ' + res.statusCode);  
            console.log('HEADERS: ' + JSON.stringify(res.headers));  
            res.setEncoding('utf8');  
            res.on('data', function (chunk) {  
                //console.log('BODY: ' + chunk);
                callback(chunk);
            });  
        });
        //响应错误  
        req.on('error', function (e) {  
            console.log('problem with request: ' + e.message);  
        });  
        //终止响应 
        req.end(); 
    };

    /*
    * @funtion -
    * host：域名
    * port：端口号
    * path：域名
    * data：数据
    * callback：回调函数
    * safe：
    * */
   static getByOpt(host, port, path, data, callback, safe){
        let content = qs.stringify(data);  
        let options = {  
            hostname: host,  
            path: path + '?' + content,  
            method:'GET'
        };
        if(port){
            options.port = port;
        }
        let proto = http;
        if(safe){
            proto = https;
        }
        let req = proto.request(options, function (res) {  
            //console.log('STATUS: ' + res.statusCode);  
            //console.log('HEADERS: ' + JSON.stringify(res.headers));  
            res.setEncoding('utf8');  
            res.on('data', function (chunk) {  
                //console.log('BODY: ' + chunk);
                let json = JSON.parse(chunk);
                callback(true,json);
            });  
        });
          
        req.on('error', function (e) {  
            console.log('problem with request: ' + e.message);
            callback(false,e);
        });  
          
        req.end();         
    };

    /**
     * funtion -
     * @param {*} url 
     * @param {*} data 
     * @param {*} callback 
     * @param {*} safe 
     */
    static getByUrl(url, data, callback, safe) {
        let content = qs.stringify(data);
        url = url + '?' + content;
        console.log("getByUrl:" + url);
        let proto = http;
        if (safe) {
            proto = https;
        }
        let req = proto.get(url, function (res) {
            //console.log('STATUS: ' + res.statusCode);  
            //console.log('HEADERS: ' + JSON.stringify(res.headers));  
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                //console.log('BODY: ' + chunk);
                let json = JSON.parse(chunk);
                console.log("dataJson:" + json);
                callback(true, json);
            });
        });

        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
            callback(false, e);
        });

        req.end();
    };

    /*
    * @funtion -
    * host：域名
    * port：端口号
    * path：域名
    * data：数据
    * callback：回调函数
    * safe：
    * */
   static send(res,errcode,errmsg,data){
        if(data == null){
            data = {};
        }
        data.errcode = errcode;
        data.errmsg = errmsg;
        let jsonstr = JSON.stringify(data);
        res.send(jsonstr);
    };
}