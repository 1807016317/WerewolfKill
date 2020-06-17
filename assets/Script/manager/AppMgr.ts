/*
*	title: AppMgr
*	desc: 应用管理
*	auth: wangquanyou
*	date: 2020/06/17 
*/

let g_Mgr = {};

/**
 * URL 解析
 */
function urlParse(){
    let params = {};
    if(window.location == null){
        return params;
    }
    let name,value; 
    let str=window.location.href; //取得整个地址栏
    let num=str.indexOf("?") 
    str=str.substr(num+1); //取得所有参数   stringlet.substr(start [, length ]

    let arr=str.split("&"); //各个参数放到数组里
    for(let i=0;i < arr.length;i++){ 
        num=arr[i].indexOf("="); 
        if(num>0){ 
            name=arr[i].substring(0,num);
            value=arr[i].substr(num+1);
            params[name]=value;
        } 
    }
    return params;
}

function initMgr(){
    cc["appMgr"] = {};

    //let UserMgr = require("UserMgr");
    //g_Mgr["userMgr"] = new UserMgr();
    
    //let ReplayMgr = require("ReplayMgr");
    //g_Mgr["replayMgr"] = new ReplayMgr();
    
    //g_Mgr["http"] = require("HTTP");
    //g_Mgr["global"] = require("Global");
    //g_Mgr["net"] = require("Net");
    
    //let GameNetMgr = require("GameNetMgr");
    //g_Mgr["gameNetMgr"] = new GameNetMgr();
    //g_Mgr["gameNetMgr"].initHandlers();
    
    //let Utils = require("Utils");
    //g_Mgr["utils"] = new Utils();
    
    //let MJUtil = require("MJUtil");
    //g_Mgr.mjutil = new MJUtil();
    
    cc["args"] = urlParse();
}