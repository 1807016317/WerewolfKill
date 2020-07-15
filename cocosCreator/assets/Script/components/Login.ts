/*
* name:login
* author:wangquanyou
* time:2020/5/24
*/
import Tools from "../tools/Tools"
import methodID from "../tools/methodID"
import g_Mgr = require("../manager/Global");

const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {

  @property(cc.Node)
  GameHall: cc.Node = null;

  @property(cc.Button)
  button: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    //this.GameHall.active = false;
    g_Mgr["eventHandle"].addEvent("toGameHall", this.toGameHall.bind(this));
  }

  /**
   * 登录
   */
  onLogin() {
    Tools.log(methodID.login, "获取微信登录态");
    g_Mgr["userMgr"].wxLogin();
  }

  toGameHall(){
    //let loginNode = cc.find("Canvas/LOGIN");
    //let hallNode = cc.find("Canvas/GAMEHALL");
    this.node.active = false;
    this.GameHall.active = true;
  }
  // update (dt) {}
}
