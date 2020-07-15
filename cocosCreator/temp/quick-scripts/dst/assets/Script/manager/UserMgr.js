
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/manager/UserMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ba67+o+XtJjrHQQ7wo/Z/v', 'UserMgr');
// Script/manager/UserMgr.ts

"use strict";
/*
*	title: UserMgr
*	desc: 用户管理
*	auth: wangquanyou
*	date: 2020/06/18
*/
Object.defineProperty(exports, "__esModule", { value: true });
var g_Mgr = require("./Global");
var Tools_1 = require("../tools/Tools");
var methodID_1 = require("../tools/methodID");
var UserMgr = /** @class */ (function () {
    function UserMgr() {
        this.properties = {
            openid: null,
            name: null,
            avatarUrl: null,
            sex: 0,
            lv: 0,
            exp: 0,
            coins: 0,
            gems: 0,
            sign: 0,
            ip: "",
            roomData: null,
            oldRoomId: null,
            address: {
                country: "",
                province: "",
                city: "",
            }
        };
    }
    /**
     * 微信小游戏登录
     */
    UserMgr.prototype.wxLogin = function () {
        var self = this;
        wx.login({
            success: function (res) {
                //res.code：用户登录凭证（有效期五分钟）。
                //开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid 和 session_key 等信息
                if (res.code) {
                    console.log("res:" + res.code);
                    //授权获取玩家信息t
                    self.getAuthorize();
                    //发起微信小游戏登录凭证校验请求
                    g_Mgr["httpReqMgr"].reqWxMiniLogin(res.code, function (data) {
                        var extraJson = data.extraJson;
                        var ret = data.ret;
                        if (ret.retcode == 0) {
                            self.properties.openid = extraJson.openid;
                            console.log("获取 openid 成功：" + extraJson.openid);
                        }
                        else {
                            console.log("获取 openid 失败:" + ret.msg);
                        }
                    });
                }
                else {
                    Tools_1.default.log(methodID_1.default.login, "登录失败！" + res.errMsg);
                }
            }
        });
        //cc.vv.wc.show("正在登录游戏");
    };
    ;
    /**
    * 向玩家申请授权
    * 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    */
    UserMgr.prototype.getAuthorize = function () {
        var self = this;
        wx.getSetting({
            success: function (res) {
                if (!res.authSetting['scope.record']) {
                    wx.authorize({
                        scope: 'scope.userInfo',
                        success: function () {
                            // 用户已经同意被获取用户信息
                            console.log('get userInfo success');
                            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                            wx.getUserInfo({
                                success: function (res) {
                                    var userInfo = res.userInfo; //用户信息
                                    self.properties.name = userInfo.nickName; //昵称
                                    self.properties.avatarUrl = userInfo.avatarUrl; //头像链接
                                    self.properties.sex = userInfo.gender; //性别 0：未知、1：男、2：女
                                    self.properties.address.country = userInfo.country; //国家
                                    self.properties.address.province = userInfo.province; //省份
                                    self.properties.address.city = userInfo.city; //城市
                                    g_Mgr["eventHandle"].emitEvent("setUserInfo");
                                    self.saveUserIfo();
                                    Tools_1.default.log(methodID_1.default.getUserIfo, "获取用户信息成功：" + userInfo);
                                },
                                fail: function (res) {
                                    console.log("获取用户信息失败:" + res);
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    ;
    /**
     * 将微信用户信息发送给服务器，存入数据库
     */
    UserMgr.prototype.saveUserIfo = function () {
        g_Mgr["httpReqMgr"].reqWxUserInfo(this.properties, function (res) {
            Tools_1.default.log(methodID_1.default.saveUserIfo, "存储" + res.msg);
        });
    };
    ;
    return UserMgr;
}());
exports.default = UserMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYW5hZ2VyXFxVc2VyTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7RUFLRTs7QUFFRixnQ0FBbUM7QUFDbkMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUV6QztJQUFBO1FBQ0UsZUFBVSxHQUFHO1lBQ1gsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUUsSUFBSTtZQUNWLFNBQVMsRUFBRSxJQUFJO1lBQ2YsR0FBRyxFQUFFLENBQUM7WUFDTixFQUFFLEVBQUUsQ0FBQztZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxDQUFDO1lBQ1AsRUFBRSxFQUFFLEVBQUU7WUFDTixRQUFRLEVBQUUsSUFBSTtZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFDO2dCQUNOLE9BQU8sRUFBQyxFQUFFO2dCQUNWLFFBQVEsRUFBQyxFQUFFO2dCQUNYLElBQUksRUFBQyxFQUFFO2FBQ1I7U0FDRixDQUFDO0lBaUZKLENBQUM7SUEvRUM7O09BRUc7SUFDSCx5QkFBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLFlBQUMsR0FBRztnQkFDVCwwQkFBMEI7Z0JBQzFCLHdFQUF3RTtnQkFDeEUsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsV0FBVztvQkFDWCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLGlCQUFpQjtvQkFDakIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsSUFBSTt3QkFDekQsSUFBSSxTQUFTLEdBQUcs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LFdBQVcsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFDSixjQUFDO0FBQUQsQ0FwR0EsQUFvR0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbipcdHRpdGxlOiBVc2VyTWdyXHJcbipcdGRlc2M6IOeUqOaIt+euoeeQhlxyXG4qXHRhdXRoOiB3YW5ncXVhbnlvdVxyXG4qXHRkYXRlOiAyMDIwLzA2LzE4IFxyXG4qL1xyXG5cclxuaW1wb3J0IGdfTWdyID0gcmVxdWlyZShcIi4vR2xvYmFsXCIpO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4uL3Rvb2xzL1Rvb2xzXCI7XHJcbmltcG9ydCBtZXRob2RJRCBmcm9tIFwiLi4vdG9vbHMvbWV0aG9kSURcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNZ3Ige1xyXG4gIHByb3BlcnRpZXMgPSB7XHJcbiAgICBvcGVuaWQ6IG51bGwsIC8v55So5oi3SURcclxuICAgIG5hbWU6IG51bGwsIC8v55So5oi35pi156ewXHJcbiAgICBhdmF0YXJVcmw6IG51bGwsIC8v55So5oi35aS05YOPXHJcbiAgICBzZXg6IDAsIC8v5oCn5YirXHJcbiAgICBsdjogMCwgLy/nrYnnuqdcclxuICAgIGV4cDogMCwgLy/nu4/pqoxcclxuICAgIGNvaW5zOiAwLCAvL+mHkemSsVxyXG4gICAgZ2VtczogMCwgLy/miL/ljaFcclxuICAgIHNpZ246IDAsIC8v562+5ZCNXHJcbiAgICBpcDogXCJcIiwgLy9JUFxyXG4gICAgcm9vbURhdGE6IG51bGwsIC8v5oi/6Ze05pWw5o2uXHJcbiAgICBvbGRSb29tSWQ6IG51bGwsIC8v6ICB5oi/6Ze0SURcclxuICAgIGFkZHJlc3M6e1xyXG4gICAgICBjb3VudHJ5OlwiXCIsXHJcbiAgICAgIHByb3ZpbmNlOlwiXCIsXHJcbiAgICAgIGNpdHk6XCJcIixcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiDlvq7kv6HlsI/muLjmiI/nmbvlvZVcclxuICAgKi9cclxuICB3eExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIC8vcmVzLmNvZGXvvJrnlKjmiLfnmbvlvZXlh63or4HvvIjmnInmlYjmnJ/kupTliIbpkp/vvInjgIJcclxuICAgICAgICAvL+W8gOWPkeiAhemcgOimgeWcqOW8gOWPkeiAheacjeWKoeWZqOWQjuWPsOiwg+eUqCBhdXRoLmNvZGUyU2Vzc2lvbu+8jOS9v+eUqCBjb2RlIOaNouWPliBvcGVuaWQg5ZKMIHNlc3Npb25fa2V5IOetieS/oeaBr1xyXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXM6XCIgKyByZXMuY29kZSk7XHJcbiAgICAgICAgICAvL+aOiOadg+iOt+WPlueOqeWutuS/oeaBr3RcclxuICAgICAgICAgIHNlbGYuZ2V0QXV0aG9yaXplKCk7XHJcbiAgICAgICAgICAvL+WPkei1t+W+ruS/oeWwj+a4uOaIj+eZu+W9leWHreivgeagoemqjOivt+axglxyXG4gICAgICAgICAgZ19NZ3JbXCJodHRwUmVxTWdyXCJdLnJlcVd4TWluaUxvZ2luKHJlcy5jb2RlLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgZXh0cmFKc29uID0gZGF0YS5leHRyYUpzb247XHJcbiAgICAgICAgICAgIGxldCByZXQgPSBkYXRhLnJldDtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXRjb2RlID09IDApIHtcclxuICAgICAgICAgICAgICBzZWxmLnByb3BlcnRpZXMub3BlbmlkID0gZXh0cmFKc29uLm9wZW5pZDtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPliBvcGVuaWQg5oiQ5Yqf77yaXCIgKyBleHRyYUpzb24ub3BlbmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPliBvcGVuaWQg5aSx6LSlOlwiICsgcmV0Lm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUb29scy5sb2cobWV0aG9kSUQubG9naW4sIFwi55m75b2V5aSx6LSl77yBXCIgKyByZXMuZXJyTXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvL2NjLnZ2LndjLnNob3coXCLmraPlnKjnmbvlvZXmuLjmiI9cIik7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgKiDlkJHnjqnlrrbnlLPor7fmjojmnYNcclxuICAqIOWPr+S7pemAmui/hyB3eC5nZXRTZXR0aW5nIOWFiOafpeivouS4gOS4i+eUqOaIt+aYr+WQpuaOiOadg+S6hiBcInNjb3BlLnJlY29yZFwiIOi/meS4qiBzY29wZVxyXG4gICovXHJcbiAgZ2V0QXV0aG9yaXplKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnJlY29yZCddKSB7XHJcbiAgICAgICAgICB3eC5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJJbmZvJyxcclxuICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAvLyDnlKjmiLflt7Lnu4/lkIzmhI/ooqvojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IHVzZXJJbmZvIHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXHJcbiAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvOyAvL+eUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnRpZXMubmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lOyAvL+aYteensFxyXG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnRpZXMuYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsOyAvL+WktOWDj+mTvuaOpVxyXG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnRpZXMuc2V4ID0gdXNlckluZm8uZ2VuZGVyOyAvL+aAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcclxuICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wZXJ0aWVzLmFkZHJlc3MuY291bnRyeSA9IHVzZXJJbmZvLmNvdW50cnk7IC8v5Zu95a62XHJcbiAgICAgICAgICAgICAgICAgIHNlbGYucHJvcGVydGllcy5hZGRyZXNzLnByb3ZpbmNlID0gdXNlckluZm8ucHJvdmluY2U7IC8v55yB5Lu9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGYucHJvcGVydGllcy5hZGRyZXNzLmNpdHkgPSB1c2VySW5mby5jaXR5OyAvL+WfjuW4glxyXG4gICAgICAgICAgICAgICAgICBnX01ncltcImV2ZW50SGFuZGxlXCJdLmVtaXRFdmVudChcInNldFVzZXJJbmZvXCIpO1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLnNhdmVVc2VySWZvKCk7XHJcbiAgICAgICAgICAgICAgICAgIFRvb2xzLmxvZyhtZXRob2RJRC5nZXRVc2VySWZvLCBcIuiOt+WPlueUqOaIt+S/oeaBr+aIkOWKn++8mlwiICsgdXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W55So5oi35L+h5oGv5aSx6LSlOlwiICsgcmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiDlsIblvq7kv6HnlKjmiLfkv6Hmga/lj5HpgIHnu5nmnI3liqHlmajvvIzlrZjlhaXmlbDmja7lupNcclxuICAgKi9cclxuICBzYXZlVXNlcklmbygpIHtcclxuICAgIGdfTWdyW1wiaHR0cFJlcU1nclwiXS5yZXFXeFVzZXJJbmZvKHRoaXMucHJvcGVydGllcywgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICBUb29scy5sb2cobWV0aG9kSUQuc2F2ZVVzZXJJZm8sIFwi5a2Y5YKoXCIgKyByZXMubXNnKTtcclxuICAgIH0pXHJcbiAgfTtcclxufVxyXG4iXX0=