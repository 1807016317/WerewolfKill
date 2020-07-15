"use strict";
cc._RF.push(module, '319a79WOpROUo/+klJLhMBo', 'HttpReqMgr');
// Script/serverConnect/HttpReqMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
*	title: HttpReqMgr
*	desc: Http 请求接口管理
*	auth: wangquanyou
*	date: 2020/06/18
*/
var g_Mgr = require("../manager/Global");
var HttpReqMgr = /** @class */ (function () {
    function HttpReqMgr() {
        this.http = g_Mgr["http"];
    }
    /**
     * 微信小游戏登录凭证校验，用 code 获取 openid
     * @param code 调用微信小游戏客户端登录获取到的 code
     * @param callback 回调函数
     */
    HttpReqMgr.prototype.reqWxMiniLogin = function (code, callback) {
        this.http.sendRequest("/wxmini_auth", { code: code, os: "wxmini" }, callback);
    };
    /**
     * 将客户端接口获取到的微信用户信息存入数据库
     * @param userInfo
     * @param callback
     */
    HttpReqMgr.prototype.reqWxUserInfo = function (userInfo, callback) {
        this.http.sendRequest("/save_userInfo", userInfo, callback);
    };
    /**
     * 获取预设板对应人数的角色卡
     * @param playerNum
     * @param callback
     */
    HttpReqMgr.prototype.reqCardOfPreset = function (playerNum, callback) {
        this.http.sendRequest("/get_card_message", playerNum, callback, "https://www.oldwang.top:9002");
    };
    return HttpReqMgr;
}());
exports.default = HttpReqMgr;

cc._RF.pop();