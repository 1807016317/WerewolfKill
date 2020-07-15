
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/serverConnect/HttpReqMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzZXJ2ZXJDb25uZWN0XFxIdHRwUmVxTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0VBS0U7QUFDRix5Q0FBNEM7QUFFNUM7SUFBQTtRQUNJLFNBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUEyQnpCLENBQUM7SUExQkc7Ozs7T0FJRztJQUNILG1DQUFjLEdBQWQsVUFBZSxJQUFJLEVBQUUsUUFBUTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtDQUFhLEdBQWIsVUFBYyxRQUFRLEVBQUUsUUFBUTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBZSxHQUFmLFVBQWdCLFNBQVMsRUFBRSxRQUFRO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKlx0dGl0bGU6IEh0dHBSZXFNZ3JcclxuKlx0ZGVzYzogSHR0cCDor7fmsYLmjqXlj6PnrqHnkIZcclxuKlx0YXV0aDogd2FuZ3F1YW55b3VcclxuKlx0ZGF0ZTogMjAyMC8wNi8xOCBcclxuKi9cclxuaW1wb3J0IGdfTWdyID0gcmVxdWlyZShcIi4uL21hbmFnZXIvR2xvYmFsXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcU1nciB7XHJcbiAgICBodHRwID0gZ19NZ3JbXCJodHRwXCJdO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvq7kv6HlsI/muLjmiI/nmbvlvZXlh63or4HmoKHpqozvvIznlKggY29kZSDojrflj5Ygb3BlbmlkXHJcbiAgICAgKiBAcGFyYW0gY29kZSDosIPnlKjlvq7kv6HlsI/muLjmiI/lrqLmiLfnq6/nmbvlvZXojrflj5bliLDnmoQgY29kZVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOWbnuiwg+WHveaVsFxyXG4gICAgICovXHJcbiAgICByZXFXeE1pbmlMb2dpbihjb2RlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuaHR0cC5zZW5kUmVxdWVzdChcIi93eG1pbmlfYXV0aFwiLCB7IGNvZGU6IGNvZGUsIG9zOiBcInd4bWluaVwiIH0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwhuWuouaIt+err+aOpeWPo+iOt+WPluWIsOeahOW+ruS/oeeUqOaIt+S/oeaBr+WtmOWFpeaVsOaNruW6k1xyXG4gICAgICogQHBhcmFtIHVzZXJJbmZvIFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICByZXFXeFVzZXJJbmZvKHVzZXJJbmZvLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuaHR0cC5zZW5kUmVxdWVzdChcIi9zYXZlX3VzZXJJbmZvXCIsIHVzZXJJbmZvLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bpooTorr7mnb/lr7nlupTkurrmlbDnmoTop5LoibLljaFcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJOdW0gXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgIHJlcUNhcmRPZlByZXNldChwbGF5ZXJOdW0sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5odHRwLnNlbmRSZXF1ZXN0KFwiL2dldF9jYXJkX21lc3NhZ2VcIiwgcGxheWVyTnVtLCBjYWxsYmFjaywgXCJodHRwczovL3d3dy5vbGR3YW5nLnRvcDo5MDAyXCIpO1xyXG4gICAgfVxyXG59Il19