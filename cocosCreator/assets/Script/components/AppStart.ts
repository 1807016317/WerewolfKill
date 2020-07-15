/*
*	title: AppStart
*	desc: 应用开始
*	auth: wangquanyou
*	date: 2020/06/17 
*/

import AppMgr from '../manager/AppMgr';
    
const {ccclass, property} = cc._decorator;

@ccclass
export default class AppStart extends cc.Component {

    @property(cc.Node)
    hall: cc.Node = null;

    @property(cc.Node)
    login: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        AppMgr.getInstance();
        //this.hall.active = false;
        this.login.active = true;
    }

    start () {

    }

    // update (dt) {}
}
