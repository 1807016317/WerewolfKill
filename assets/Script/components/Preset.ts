
const {ccclass, property} = cc._decorator;

@ccclass
export default class preset extends cc.Component {

    @property(cc.Slider)
    peopleNum: cc.Slider = null;

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
