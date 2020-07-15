/*
*	title: AppMgr
*	desc: 应用管理
*	auth: wangquanyou
*	date: 2020/06/17 
*/
let appMgr_Instance = null;

import g_Mgr = require("./Global");
import Http = require("../serverConnect/Http");
import HttpReqMgr from "../serverConnect/HttpReqMgr";
import UserMgr from "./UserMgr";
import EventHandle from "./EventHandle";

export default class AppMgr {
    private constructor(){
        this.initMgr();
    }

    static getInstance(){
        if(appMgr_Instance == null || appMgr_Instance == undefined){
            appMgr_Instance = new AppMgr();
            return appMgr_Instance;
        }
        return appMgr_Instance;
    }

    /**
     * URL 解析
     */
    urlParse() {
        let params = {};
        if (window.location == null) {
            return params;
        }
        let name, value;
        let str = window.location.href; //取得整个地址栏
        let num = str.indexOf("?")
        str = str.substr(num + 1); //取得所有参数   stringlet.substr(start [, length ]

        let arr = str.split("&"); //各个参数放到数组里
        for (let i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                params[name] = value;
            }
        }
        return params;
    };

    /**
     * 手动初始化生命周期
     */
    private initMgr() {
        //g_Mgr 中的 key 值一律使用驼峰式
        cc["appMgr"] = {};
        g_Mgr["appMgr"] = {};
        console.log("app" + cc["appMgr"]);

        g_Mgr["userMgr"] = new UserMgr();

        g_Mgr["eventHandle"] = EventHandle;

        //let ReplayMgr = require("ReplayMgr");
        //g_Mgr["replayMgr"] = new ReplayMgr();

        g_Mgr["http"] = Http;
        g_Mgr["httpReqMgr"] = new HttpReqMgr();
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
}