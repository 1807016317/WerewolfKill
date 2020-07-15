import g_Mgr = require("../manager/Global");


const { ccclass, property } = cc._decorator;

@ccclass
export default class preset extends cc.Component {

    @property(cc.Slider)
    Slider: cc.Slider = null;

    @property(cc.Label)
    playerNumLab: cc.Label = null;


    playerNum: Number = 0;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    /**
     * 选择玩家人数
     */
    selectPlayerNum() {
        let num = this.Slider.progress * 10;
        let addPlayer = (num / (10 / 6)).toFixed(0);
        this.playerNum = 6 + Number(addPlayer);
        this.playerNumLab.string = String(this.playerNum);
        this.getCard();
    }

    /**
     * 根据人数获取本局身份卡
     */
    getCard() {
        let req = { playerNum: this.playerNumLab.string };
        g_Mgr["httpReqMgr"].reqCardOfPreset(req, function (res) {
            console.log("根据人数获取本局角色身份卡");
        });
    }

    close() {
        this.node.active = false;
    }

    // update (dt) {}
}
