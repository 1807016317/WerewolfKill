/*
*	title: Selfset
*	desc: 自设板
*	auth: wangquanyou
*	date: 2020/06/21 
*/
const {ccclass, property} = cc._decorator;

@ccclass
export default class Selfset extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    close(){
        this.node.active = false;
    }

    // update (dt) {}
}
