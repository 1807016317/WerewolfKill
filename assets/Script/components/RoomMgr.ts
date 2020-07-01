/*
* desc：游戏房间管理
* @王全由
* date：2020/7/1
*/

const {ccclass, property} = cc._decorator;

@ccclass
export default class RoomMgr extends cc.Component {

    @property(cc.ScrollView)
    playerScrollView: cc.ScrollView = null;

    @property(cc.Label)
    roomNum: cc.Label = null;

    @property(cc.Prefab)
    player: cc.Prefab = null;

    playerPool = [];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.newPlayerPool();
    }

    start () {
        this.roomNum.string = "当前房间：" ;
    }

    /**
     * 创建玩家对象池
     */
    newPlayerPool(){
        for (let i = 0; i < 12; i++) {
            let node = cc.instantiate(this.player);
            this.playerPool.push(node);
            //this.playerScrollView.content.addChild(node);  
        }
    }
    // update (dt) {}
}
