/*
*	title: dbConn
*	desc: dbConnInstance connect pool
*	auth: wangquanyou
*	date: 2020/06/16
*/
const { dbBase } =  require('./dbBase');
const { userDb } =  require('./userDb');
const { roomDb } =  require('./roomDb');

let Instance = null;
let userDbInstance = null;
let roomDbInstance = null;

class dbConn{
    init = function (config) {
        dbBase.init(config);
    };

    getUserDb = function() {
        if(userDbInstance === null || userDbInstance === undefined){
            userDbInstance = new userDb();
        }
        return userDbInstance;
    };

    getRoomDb = function() {
        if(roomDbInstance === null || roomDbInstance === undefined){
            roomDbInstance = new roomDb();
        }
        return roomDbInstance;
    };

    is_user_exist = function(openid, callback){
        this.getUserDb().is_user_exist(openid, callback);
    }

    create_user = function(query, callback) {
        this.getUserDb().create_user(query.openid, query.token, query.name, query.avatarUrl, query.sex, query.age, query.address, query.lv, query.exp, callback);
    };

    /**
     * 获取预设房间身份卡
     * @param {*} playerNum 
     */
    get_card_message = function(playerNum, callback) {
        this.getRoomDb().get_card_message(playerNum, callback);
    }
}

exports.dbConnInstance = function(){
    if(Instance === null || Instance === undefined){
        Instance = new dbConn();
    }
    return Instance;
}