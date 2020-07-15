/*
*	title: config
*	desc: config of server
*	auth: wangquanyou
*	date: 2020/06/17
*/
let fs = require('fs');
let path = require('path');

let HALL_IP = "www.oldwang.top";//如果非本机访问，这里要变
let HALL_CLIENT_PORT = 9002;
let HALL_ROOM_PORT = 9003;

//固定盐值，用于 MD5 密码加盐
let ACCOUNT_PRI_KEY = "^&*#$%()@";
let ROOM_PRI_KEY = "~!@#$(*&^%$&";

let LOCAL_IP = 'localhost';

//导入SSL证书文件
console.log("config 路径：" + process.cwd());
let privateKey = fs.readFileSync(process.cwd() + '\\www.oldwang.top\\Nginx\\2_www.oldwang.top.key', 'utf8');
let certificate = fs.readFileSync(process.cwd() + '\\www.oldwang.top\\Nginx\\1_www.oldwang.top_bundle.crt', 'utf8');
let credentials = { key: privateKey, cert: certificate };

exports.mysql = function () {
	return {
		HOST: '127.0.0.1',
		USER: 'root',
		PSWD: 'MyPass@123',//数据库密码，如果连接失败，请检查这里
		DB: 'werekill',//数据库名称，如果连接失败，请检查这里
		PORT: 3306, //安装 mysql 时设置的数据库端口号
	}
}

//账号服配置
exports.account_server = function () {
	return {
		CLIENT_PORT_HTTP: 9000,
		CLIENT_PORT_HTTPS: 9001,
		HALL_IP: HALL_IP,
		HALL_CLIENT_PORT: HALL_CLIENT_PORT,
		ACCOUNT_PRI_KEY: ACCOUNT_PRI_KEY,
		CRT: credentials,
		//
		DEALDER_API_IP: LOCAL_IP,
		DEALDER_API_PORT: 12581,
		VERSION: '20200608',
		APP_WEB: 'http://fir.im/2f17', //下载 app 的地址
	};
};

//大厅服配置
exports.hall_server = function () {
	return {
		HALL_IP: HALL_IP,
		CLEINT_PORT: HALL_CLIENT_PORT,
		FOR_ROOM_IP: LOCAL_IP,
		ROOM_PORT: HALL_ROOM_PORT,
		ACCOUNT_PRI_KEY: ACCOUNT_PRI_KEY,
		ROOM_PRI_KEY: ROOM_PRI_KEY,
		CRT: credentials,
	};
};

//游戏服配置
exports.game_server = function () {
	return {
		SERVER_ID: "001",

		//暴露给大厅服的HTTP端口号
		HTTP_PORT: 9004,
		//HTTP TICK的间隔时间，用于向大厅服汇报情况
		HTTP_TICK_TIME: 5000,
		//大厅服IP
		HALL_IP: LOCAL_IP,
		FOR_HALL_IP: LOCAL_IP,
		//大厅服端口
		HALL_PORT: HALL_ROOM_PORT,
		//与大厅服协商好的通信加密KEY
		ROOM_PRI_KEY: ROOM_PRI_KEY,

		//暴露给客户端的接口
		CLIENT_IP: HALL_IP,
		CLIENT_PORT: 10000,
	};
};