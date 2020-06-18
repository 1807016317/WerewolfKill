/*
*	title: AppStart
*	desc: 应用开始
*	auth: wangquanyou
*	date: 2020/06/17 
*/

//import AppMgr from './manager/AppMgr';
import AppMgr = require("./manager/AppMgr");
    
const {ccclass, property} = cc._decorator;

@ccclass
export default class AppStart extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = '';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        AppMgr.AppMgr.getInstance().initMgr();
        console.log("args" + AppMgr.g_Mgr["a"]);
    }

    start () {

    }

    // update (dt) {}
}
