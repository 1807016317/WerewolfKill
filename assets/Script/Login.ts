/*
* name:login
* author:wangquanyou
* time:2020/5/24
*/
import Tools from "./tools/Tools"
import methodID from "./tools/methodID"
import g_Mgr from "./manager/Global";

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
    Tools.log(methodID.login, "获取微信登录态");
    g_Mgr["userMgr"].WxLogin();
  }
  // update (dt) {}
}
