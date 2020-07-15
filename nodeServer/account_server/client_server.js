let crypto = require('../util/crypto');
let express = require('express');
let httpMgr = require("../util/httpMgr");
let room_service = require("./room_server");
let https = require('https');
let {dbConnInstance} = require('../dbConn/dbConn');

let app = express();
let config = null;

function check_account(req,res){
	let account = req.query.account;
	let sign = req.query.sign;
	if(account == null || sign == null){
		httpMgr.send(res,1,"unknown error");
		return false;
	}
	/*
	let serverSign = crypto.md5(account + req.ip + config.ACCOUNT_PRI_KEY);
	if(serverSign != sign){
		httpMgr.send(res,2,"login failed.");
		return false;
	}
	*/
	return true;
}

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.get('/get_card_message', function (req, res) {
	if (!check_account(req, res)) {
		//return;
	}
	let playerNum = req.query.playerNum;

	if (playerNum == null) {
		httpMgr.send(res, -1, "parameters don't match api requirements.");
		return;
	}
	dbConnInstance().get_card_message(playerNum, function(data){

	});
})

exports.start = function ($config) {
	config = $config;
	//app.listen(config.CLEINT_PORT);
	//创建https服务器
	let httpsServer = https.createServer(config.CRT, app);

	httpsServer.listen(config.CLEINT_PORT, function () {
		console.log('client Server is running on: %s', config.HALL_IP + ":" + config.CLEINT_PORT);
	});
	//console.log("client service is listening on port " + config.CLEINT_PORT);
};