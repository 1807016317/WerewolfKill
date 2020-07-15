/*
*	title: dbBase
*	desc: base class of dbConn
*	auth: wangquanyou
*	date: 2020/07/10 周五
*/
let mysql = require('mysql');

//新建一个数据库连接池
let pool = null;
/**
 * 数据库基类
 */ 
exports.dbBase = class {

    nop(args) {

    }
    /**
     * 数据库初始化
     * @param {*} config 
     */
    static init = function(config) {
        pool = mysql.createPool({
            host: config.HOST,
            user: config.USER,
            password: config.PSWD,
            database: config.DB,
            port: config.PORT,
        });
    };
    /**
    * 数据库请求方法
    * @param {*} sql 
    * @param {*} callback 
    */
    query(sql, callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                callback(err, null, null);
            } else {
                conn.query(sql, function (qerr, vals, fields) {
                    //释放连接  
                    conn.release();
                    //事件驱动回调  
                    callback(qerr, vals, fields);
                });
            }
        });
    };
}

// constructor = function(obj){
//     function context(){};
//     context.prototype = obj;
//     return new context();
// }

// this.dbBaseInstance = constructor(this.dbBase.prototype);

// exports.dbBaseInstance;