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
     * 微信小游戏登录凭证校验
     * @param code 调用微信小游戏客户端登录获取到的 code
     * @param callback 回调函数
     */
    reqWxMiniLogin(code, callback) {
        this.http.sendRequest("/wxmini_auth", { code: code }, callback, "https://tcb-api.tencentcloudapi.com");
    }
}