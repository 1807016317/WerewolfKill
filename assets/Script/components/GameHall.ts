/*
* desc：游戏选择大厅
* @王全由
* date：2020/6/9
*/

import g_Mgr = require("../manager/Global");

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHall extends cc.Component {

    @property(cc.Node)
    preset: cc.Node = null;

    @property(cc.Node)
    setBySelf: cc.Node = null;

    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Sprite)
    userPic: cc.Sprite = null;
    
    //profileName = g_Mgr["userMgr"].properties.userName; //用户昵称
    //avatarUrl = g_Mgr["userMgr"].properties.avatarUrl; //用户头像
    //sex = g_Mgr["userMgr"].properties.sex; //性别

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.preset.active = false;
        this.setBySelf.active = false;
    }

    start () {
        //this.userName.string = this.profileName;
        //this.userPic.spriteFrame = this.avatarUrl;
    }

    //预设板
    selectPreset(){
        this.preset.active = true;
        this.setBySelf.active = false;
    }

    //自设板
    selectSetBySelf(){
        this.setBySelf.active = true;
        this.preset.active = false;
    }

    // update (dt) {}
}
