/*
*	title: AppStart
*	desc: 应用开始
*	auth: wangquanyou
*	date: 2020/06/17 
*/

require('./serverConnect/serverConnect');
require('./manager/AppMgr');
    
const {ccclass, property} = cc._decorator;

@ccclass
export default class AppStart extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = '';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
