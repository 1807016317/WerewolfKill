"use strict";
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