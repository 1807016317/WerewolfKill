/*
*	title: userDb
*	desc: Db of user control
*	auth: wangquanyou
*	date: 2020/06/16 
*/
//const dbBaseInstance = require("./dbBase");
//let Instance = null;

const { dbBase } = require("./dbBase");

exports.userDb = class extends dbBase {
    //dbBaseInstance.dbBase.call(this);
    /*
    查询账号是否存在
    openid -账号参数
    callback -查询回调函数
    */
    is_user_exist(openid, callback) {
        callback = callback == null ? nop : callback;
        if (openid == null) {
            callback(false);
            return;
        }
        let sql = 'SELECT openid FROM t_users WHERE openid = "' + openid + '"';
        this.query(sql, function (err, rows, fields) {
            if (err) {
                throw err;
            }
            if (rows.length == 0) {
                callback(false);
                return;
            }
            callback(true);
        });
    };

    create_user(openid, token, name, avatarUrl, sex, age, address, lv, exp, callback) {
        callback = callback == null ? nop : callback;
        if (openid == null) {
            callback(null);
            return;
        }

        let sql = "INSERT INTO t_users(openid, token, name, avatarUrl, sex, age, address, lv, exp) \
        VALUES('{0}','{1}','{2}','{3}',{4},{5},'{6}',{7},{8})";
        sql = sql.format(openid, token, name, avatarUrl, sex, age, address, lv, exp);

        this.query(sql, function (err, row, fields) {
            if (err) {
                callback(null);
                throw err;
            }
            else {
                callback(openid);
            }
        });
    };

    /*
    获取用户数据信息
    account -账号信息
    callback -查询回调
    */
    get_user_data(account, callback) {
        callback = callback == null ? nop : callback;
        if (account == null) {
            callback(null);
            return;
        }

        let sql = 'SELECT userid,account,name,lv,exp,coins,gems,roomid FROM t_users WHERE account = "' + account + '"';
        this.query(sql, function (err, rows, fields) {
            if (err) {
                callback(null);
                throw err;
            }

            if (rows.length == 0) {
                callback(null);
                return;
            }
            rows[0].name = crypto.fromBase64(rows[0].name);
            callback(rows[0]);
        });
    };
}

// userDb.prototype = dbBaseInstance.dbBaseInstance;
// dbBaseInstance.dbBaseInstance.constructor = userDb;

// exports.userDbInstance = function(){
//     if(Instance === null || Instance === undefined){
//         Instance = new userDb();
//     }
//     return Instance;
// }