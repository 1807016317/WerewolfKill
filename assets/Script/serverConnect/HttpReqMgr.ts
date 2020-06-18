/*
*	title: HttpReqMgr
*	desc: Http 请求接口管理
*	auth: wangquanyou
*	date: 2020/06/18 
*/
import g_Mgr from "../manager/Global";
let http = g_Mgr["http"];

export default class HttpReqMgr {
    /**
     * 微信小游戏登录凭证校验
     * @param code 调用微信小游戏客户端登录获取到的 code
     * @param callback 回调函数
     */
    static reqWxMiniLogin(code, callback) {
        console.log(g_Mgr["http"] == null || g_Mgr["http"] == undefined);
        http.sendRequest("/wxmini_auth", { code: code }, callback);
    }
}