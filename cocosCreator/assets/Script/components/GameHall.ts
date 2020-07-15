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

    @property(cc.Node)
    cardIntroduce: cc.Node = null;

    @property(cc.Label)
    userName: cc.Label = null;

    @property(cc.Sprite)
    userPic: cc.Sprite = null;
    
    //profileName = g_Mgr["userMgr"].properties.userName; //用户昵称
    //avatarUrl = g_Mgr["userMgr"].properties.avatarUrl; //用户头像
    //sex = g_Mgr["userMgr"].properties.sex; //性别

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        g_Mgr["eventHandle"].addEvent("setUserInfo", this.setUserInfo.bind(this));
        this.preset.active = false;
        this.setBySelf.active = false;
        this.cardIntroduce.active = false;
    }

    start () {
        //this.userPic.spriteFrame = this.avatarUrl;
    }

    //预设板
    selectPreset(){
        this.preset.active = true;
        this.setBySelf.active = false;
        this.cardIntroduce.active = false;
    }

    //自设板
    selectSetBySelf(){
        this.setBySelf.active = true;
        this.preset.active = false;
        this.cardIntroduce.active = false;
    }

    /**
     * 打开角色身份名词解释
     */
    onCradDescrible(){
        this.cardIntroduce.active = true;
        this.preset.active = false;
        this.setBySelf.active = false;
    }

    /**
     * 关闭角色身份名词解释
     */
    offCradDescrible(){
        this.cardIntroduce.active = false;
        this.preset.active = false;
        this.setBySelf.active = false;
    }

    setUserInfo() {
        let self = this;
        self.userName.string = g_Mgr["userMgr"].properties.name; //用户昵称
        //creator 2.4 开始废弃 loader 类
        cc.loader.load({ url: g_Mgr["userMgr"].properties.avatarUrl, type: "jpg" }, function (err, tex) {
            self.userPic.spriteFrame = new cc.SpriteFrame(tex);
        })
        g_Mgr["eventHandle"].emitEvent("toGameHall");
    }
    // update (dt) {}
}
