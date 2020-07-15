/*
*	title: app
*	desc: enter of server
*	auth: wangquanyou
*	date: 2020/06/16
*/
let {dbConnInstance} = require('../dbConn/dbConn');
let configs = require(process.argv[2]);

console.log("process" + process);

//init db pool.
//db.init(configs.mysql());
dbConnInstance().init(configs.mysql());

//

/*
let config = account_server = function(){
	return {
		CLIENT_PORT:9000,
		HALL_IP:HALL_IP,
		HALL_CLIENT_PORT:HALL_CLIENT_PORT,
		ACCOUNT_PRI_KEY:ACCOUNT_PRI_KEY,
		
		//
		DEALDER_API_IP:LOCAL_IP,
		DEALDER_API_PORT:12581,
		VERSION:'20161227',
		APP_WEB:'http://fir.im/2f17',
	};
};
*/

let account_server = require('./account_server');
let client_service = require("./client_server");
let room_service = require("./room_server");

let account_config = configs.account_server();
let hall_config = configs.hall_server();

account_server.start(account_config);
client_service.start(hall_config);
room_service.start(hall_config);

//let dapi = require('./dealer_api');
//dapi.start(config);