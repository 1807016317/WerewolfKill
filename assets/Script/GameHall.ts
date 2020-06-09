/*
* desc：游戏选择大厅
* @王全由
* date：2020/6/9
*/

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameHall extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    //预设板
    selectPreset(){

    }

    //自设板
    selectSetBySelf(){}

    // update (dt) {}
}
