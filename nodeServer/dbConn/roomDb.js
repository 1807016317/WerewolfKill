/*
*	title: roomDb
*	desc: room db control
*	auth: wangquanyou
*	date: 2020/06/16 
*/
//const dbBaseInstance = require("./dbBase");
//let Instance = null;

const { dbBase } = require("./dbBase");

exports.roomDb =  class extends dbBase{
    //dbBaseInstance.dbBase.call(this);
    //创建房间
    create_room(roomId, conf, ip, port, create_time, callback){
        callback = callback == null? nop:callback;
        let sql = "INSERT INTO t_rooms(uuid,id,base_info,ip,port,create_time) \
                    VALUES('{0}','{1}','{2}','{3}',{4},{5})";
        let uuid = Date.now() + roomId;
        let baseInfo = JSON.stringify(conf);
        sql = sql.format(uuid,roomId,baseInfo,ip,port,create_time);
        console.log(sql);
        this.query(sql,function(err,row,fields){
            if(err){
                callback(null);
                throw err;
            }
            else{
                callback(uuid);
            }
        });
    };
    
    /**
     * 获取预设房间身份卡
     * @param {Number} playerNum
     * @param {Function} callback
     */
    get_card_message(playerNum, callback){
        callback = callback == null ? nop : callback;
        //根据玩家人数查询
        let sql = 'SELECT * FROM t_card_message WHERE playerNum = "' + playerNum + '"';
        console.log(sql);
        this.query(sql, function (err, row, fields) {
            if (err) {
                callback(null);
                throw err;
            }
            if (rows.length == 0) {
                callback(null);
                return;
            }
            rows[0].card = crypto.fromBase64(rows[0].card);
            callback(rows[0]);
        });
    }
}

// roomDb.prototype = dbBaseInstance.dbBaseInstance;
// dbBaseInstance.dbBaseInstance.constructor = roomDb;

// exports.roomDbInstance = function(){
//     if(Instance === null || Instance === undefined){
//         Instance = new roomDb();
//     }
//     return Instance;
// }