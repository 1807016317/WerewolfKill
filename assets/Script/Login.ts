/*
* name:login
* author:wangquanyou
* time:2020/5/24
*/
import Tools from "./tools/Tools"
import methodID from "./tools/methodID"

const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {

  @property(cc.Label)
  label: cc.Label = null;

  @property
  text: string = 'hello';

  @property(cc.Button)
  button: cc.Button = null;

  avatarUrl = null; // 头像 URL
  userInfo = null;  // 用户信息

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {

  }

  /**
   * 登录
   */
  onLogin() {
    let self = this;
    Tools.log(methodID.login, "获取微信登录态");
    wx.login({
      success(res) {
        //res.code：用户登录凭证（有效期五分钟）。
        //开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid 和 session_key 等信息
        if (res.code) {
          console.log("res:" + res.code);
          //授权获取玩家信息
          self.getAuthorize();
          //发起网络请求
          /*wx.request({
              url: 'https://tcb-api.tencentcloudapi.com',
              data: {
                code: res.code
              }
            })*/
        } else {
          Tools.log(methodID.login, "登录失败！" + res.errMsg);
        }
      }
    })
  }
  
  /**
   * 向玩家申请授权
   * 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
   */
  /**
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
            self.avatarUrl = res.userInfo.avatarUrl;
            self.userInfo = res.userInfo;
            console.log("this:" + self.avatarUrl);
          }
        });
      }
    });
  }
*/
  // update (dt) {}
}
