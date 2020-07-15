"use strict";
cc._RF.push(module, '5708dP/MaFKNLaqxXMCYMT9', 'AppMgr');
// Script/manager/AppMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
*	title: AppMgr
*	desc: 应用管理
*	auth: wangquanyou
*	date: 2020/06/17
*/
var appMgr_Instance = null;
var g_Mgr = require("./Global");
var Http = require("../serverConnect/Http");
var HttpReqMgr_1 = require("../serverConnect/HttpReqMgr");
var UserMgr_1 = require("./UserMgr");
var EventHandle_1 = require("./EventHandle");
var AppMgr = /** @class */ (function () {
    function AppMgr() {
        this.initMgr();
    }
    AppMgr.getInstance = function () {
        if (appMgr_Instance == null || appMgr_Instance == undefined) {
            appMgr_Instance = new AppMgr();
            return appMgr_Instance;
        }
        return appMgr_Instance;
    };
    /**
     * URL 解析
     */
    AppMgr.prototype.urlParse = function () {
        var params = {};
        if (window.location == null) {
            return params;
        }
        var name, value;
        var str = window.location.href; //取得整个地址栏
        var num = str.indexOf("?");
        str = str.substr(num + 1); //取得所有参数   stringlet.substr(start [, length ]
        var arr = str.split("&"); //各个参数放到数组里
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                params[name] = value;
            }
        }
        return params;
    };
    ;
    /**
     * 手动初始化生命周期
     */
    AppMgr.prototype.initMgr = function () {
        //g_Mgr 中的 key 值一律使用驼峰式
        cc["appMgr"] = {};
        g_Mgr["appMgr"] = {};
        console.log("app" + cc["appMgr"]);
        g_Mgr["userMgr"] = new UserMgr_1.default();
        g_Mgr["eventHandle"] = EventHandle_1.default;
        //let ReplayMgr = require("ReplayMgr");
        //g_Mgr["replayMgr"] = new ReplayMgr();
        g_Mgr["http"] = Http;
        g_Mgr["httpReqMgr"] = new HttpReqMgr_1.default();
        //g_Mgr["global"] = require("Global");
        //g_Mgr["net"] = require("Net");
        //let GameNetMgr = require("GameNetMgr");
        //g_Mgr["gameNetMgr"] = new GameNetMgr();
        //g_Mgr["gameNetMgr"].initHandlers();
        //let Utils = require("Utils");
        //g_Mgr["utils"] = new Utils();
        //let MJUtil = require("MJUtil");
        //g_Mgr.mjutil = new MJUtil();
        //cc["args"] = this.urlParse();
        g_Mgr["args"] = this.urlParse();
    };
    ;
    return AppMgr;
}());
exports.default = AppMgr;

cc._RF.pop();