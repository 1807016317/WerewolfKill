
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/manager/AppMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYW5hZ2VyXFxBcHBNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7RUFLRTtBQUNGLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQztBQUUzQixnQ0FBbUM7QUFDbkMsNENBQStDO0FBQy9DLDBEQUFxRDtBQUNyRCxxQ0FBZ0M7QUFDaEMsNkNBQXdDO0FBRXhDO0lBQ0k7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLGtCQUFXLEdBQWxCO1FBQ0ksSUFBRyxlQUFlLElBQUksSUFBSSxJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUM7WUFDdkQsZUFBZSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7WUFDL0IsT0FBTyxlQUFlLENBQUM7U0FDMUI7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDekIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFDRCxJQUFJLElBQUksRUFBRSxLQUFLLENBQUM7UUFDaEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTO1FBQ3pDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsNkNBQTZDO1FBRXhFLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDVCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN4QjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNLLHdCQUFPLEdBQWY7UUFDSSx1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRWxDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUVqQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcscUJBQVcsQ0FBQztRQUVuQyx1Q0FBdUM7UUFDdkMsdUNBQXVDO1FBRXZDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQ3ZDLHNDQUFzQztRQUN0QyxnQ0FBZ0M7UUFFaEMseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QyxxQ0FBcUM7UUFFckMsK0JBQStCO1FBQy9CLCtCQUErQjtRQUUvQixpQ0FBaUM7UUFDakMsOEJBQThCO1FBRTlCLCtCQUErQjtRQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFBQSxDQUFDO0lBQ04sYUFBQztBQUFELENBeEVBLEFBd0VDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qXHR0aXRsZTogQXBwTWdyXHJcbipcdGRlc2M6IOW6lOeUqOeuoeeQhlxyXG4qXHRhdXRoOiB3YW5ncXVhbnlvdVxyXG4qXHRkYXRlOiAyMDIwLzA2LzE3IFxyXG4qL1xyXG5sZXQgYXBwTWdyX0luc3RhbmNlID0gbnVsbDtcclxuXHJcbmltcG9ydCBnX01nciA9IHJlcXVpcmUoXCIuL0dsb2JhbFwiKTtcclxuaW1wb3J0IEh0dHAgPSByZXF1aXJlKFwiLi4vc2VydmVyQ29ubmVjdC9IdHRwXCIpO1xyXG5pbXBvcnQgSHR0cFJlcU1nciBmcm9tIFwiLi4vc2VydmVyQ29ubmVjdC9IdHRwUmVxTWdyXCI7XHJcbmltcG9ydCBVc2VyTWdyIGZyb20gXCIuL1VzZXJNZ3JcIjtcclxuaW1wb3J0IEV2ZW50SGFuZGxlIGZyb20gXCIuL0V2ZW50SGFuZGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNZ3Ige1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuaW5pdE1ncigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKGFwcE1ncl9JbnN0YW5jZSA9PSBudWxsIHx8IGFwcE1ncl9JbnN0YW5jZSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhcHBNZ3JfSW5zdGFuY2UgPSBuZXcgQXBwTWdyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBNZ3JfSW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcHBNZ3JfSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVUkwg6Kej5p6QXHJcbiAgICAgKi9cclxuICAgIHVybFBhcnNlKCkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7fTtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUsIHZhbHVlO1xyXG4gICAgICAgIGxldCBzdHIgPSB3aW5kb3cubG9jYXRpb24uaHJlZjsgLy/lj5blvpfmlbTkuKrlnLDlnYDmoI9cclxuICAgICAgICBsZXQgbnVtID0gc3RyLmluZGV4T2YoXCI/XCIpXHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cihudW0gKyAxKTsgLy/lj5blvpfmiYDmnInlj4LmlbAgICBzdHJpbmdsZXQuc3Vic3RyKHN0YXJ0IFssIGxlbmd0aCBdXHJcblxyXG4gICAgICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCImXCIpOyAvL+WQhOS4quWPguaVsOaUvuWIsOaVsOe7hOmHjFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bSA9IGFycltpXS5pbmRleE9mKFwiPVwiKTtcclxuICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBhcnJbaV0uc3Vic3RyaW5nKDAsIG51bSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFycltpXS5zdWJzdHIobnVtICsgMSk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJi+WKqOWIneWni+WMlueUn+WRveWRqOacn1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRNZ3IoKSB7XHJcbiAgICAgICAgLy9nX01nciDkuK3nmoQga2V5IOWAvOS4gOW+i+S9v+eUqOmpvOWzsOW8j1xyXG4gICAgICAgIGNjW1wiYXBwTWdyXCJdID0ge307XHJcbiAgICAgICAgZ19NZ3JbXCJhcHBNZ3JcIl0gPSB7fTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFwcFwiICsgY2NbXCJhcHBNZ3JcIl0pO1xyXG5cclxuICAgICAgICBnX01ncltcInVzZXJNZ3JcIl0gPSBuZXcgVXNlck1ncigpO1xyXG5cclxuICAgICAgICBnX01ncltcImV2ZW50SGFuZGxlXCJdID0gRXZlbnRIYW5kbGU7XHJcblxyXG4gICAgICAgIC8vbGV0IFJlcGxheU1nciA9IHJlcXVpcmUoXCJSZXBsYXlNZ3JcIik7XHJcbiAgICAgICAgLy9nX01ncltcInJlcGxheU1nclwiXSA9IG5ldyBSZXBsYXlNZ3IoKTtcclxuXHJcbiAgICAgICAgZ19NZ3JbXCJodHRwXCJdID0gSHR0cDtcclxuICAgICAgICBnX01ncltcImh0dHBSZXFNZ3JcIl0gPSBuZXcgSHR0cFJlcU1ncigpO1xyXG4gICAgICAgIC8vZ19NZ3JbXCJnbG9iYWxcIl0gPSByZXF1aXJlKFwiR2xvYmFsXCIpO1xyXG4gICAgICAgIC8vZ19NZ3JbXCJuZXRcIl0gPSByZXF1aXJlKFwiTmV0XCIpO1xyXG5cclxuICAgICAgICAvL2xldCBHYW1lTmV0TWdyID0gcmVxdWlyZShcIkdhbWVOZXRNZ3JcIik7XHJcbiAgICAgICAgLy9nX01ncltcImdhbWVOZXRNZ3JcIl0gPSBuZXcgR2FtZU5ldE1ncigpO1xyXG4gICAgICAgIC8vZ19NZ3JbXCJnYW1lTmV0TWdyXCJdLmluaXRIYW5kbGVycygpO1xyXG5cclxuICAgICAgICAvL2xldCBVdGlscyA9IHJlcXVpcmUoXCJVdGlsc1wiKTtcclxuICAgICAgICAvL2dfTWdyW1widXRpbHNcIl0gPSBuZXcgVXRpbHMoKTtcclxuXHJcbiAgICAgICAgLy9sZXQgTUpVdGlsID0gcmVxdWlyZShcIk1KVXRpbFwiKTtcclxuICAgICAgICAvL2dfTWdyLm1qdXRpbCA9IG5ldyBNSlV0aWwoKTtcclxuXHJcbiAgICAgICAgLy9jY1tcImFyZ3NcIl0gPSB0aGlzLnVybFBhcnNlKCk7XHJcbiAgICAgICAgZ19NZ3JbXCJhcmdzXCJdID0gdGhpcy51cmxQYXJzZSgpO1xyXG4gICAgfTtcclxufSJdfQ==