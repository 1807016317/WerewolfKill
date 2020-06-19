/*
*	title: UserMgr
*	desc: 用户管理
*	auth: wangquanyou
*	date: 2020/06/18 
*/

import g_Mgr = require("./Global");
import Tools from "../tools/Tools";
import methodID from "../tools/methodID";

export default class UserMgr {
  properties = {
    account: null, //账号
    userId: null, //用户ID
    userName: null, //用户昵称
    avatarUrl: null, //用户头像
    sex: 0, //性别
    lv: 0, //等级
    exp: 0, //经验
    coins: 0, //金钱
    gems: 0, //房卡
    sign: 0, //签名
    ip: "", //IP
    roomData: null, //房间数据
    oldRoomId: null, //老房间ID
  };

  /**
   * 微信小游戏登录
   */
  wxLogin = function() {
    let self = this;
    wx.login({
      success(res) {
        //res.code：用户登录凭证（有效期五分钟）。
        //开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid 和 session_key 等信息
        if (res.code) {
          console.log("res:" + res.code);
          //授权获取玩家信息
          self.getAuthorize();
          //发起微信小游戏登录凭证校验请求
          g_Mgr["httpReqMgr"].reqWxMiniLogin(res.code, function (date) {
            console.log("微信获取票据接口请求到后台，返回 date：" + date);
          });
        } else {
          Tools.log(methodID.login, "登录失败！" + res.errMsg);
        }
      }
    })
    //cc.vv.wc.show("正在登录游戏");
  };

  /**
  * 向玩家申请授权
  * 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
  */
  getAuthorize() {
    let self = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              // 用户已经同意被获取用户信息
              console.log('get userInfo success');
            }
          });
        }
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wx.getUserInfo({
          success: res => {
          }
        });
      }
    });
  };
}
