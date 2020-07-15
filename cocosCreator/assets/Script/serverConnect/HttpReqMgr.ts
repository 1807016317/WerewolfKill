/*
*	title: HttpReqMgr
*	desc: Http 请求接口管理
*	auth: wangquanyou
*	date: 2020/06/18 
*/
import g_Mgr = require("../manager/Global");

export default class HttpReqMgr {
    http = g_Mgr["http"];
    /**
     * 微信小游戏登录凭证校验，用 code 获取 openid
     * @param code 调用微信小游戏客户端登录获取到的 code
     * @param callback 回调函数
     */
    reqWxMiniLogin(code, callback) {
        this.http.sendRequest("/wxmini_auth", { code: code, os: "wxmini" }, callback);
    }

    /**
     * 将客户端接口获取到的微信用户信息存入数据库
     * @param userInfo 
     * @param callback 
     */
    reqWxUserInfo(userInfo, callback) {
        this.http.sendRequest("/save_userInfo", userInfo, callback);
    }

    /**
     * 获取预设板对应人数的角色卡
     * @param playerNum 
     * @param callback 
     */
    reqCardOfPreset(playerNum, callback) {
        this.http.sendRequest("/get_card_message", playerNum, callback, "https://www.oldwang.top:9002");
    }
}