"use strict";
cc._RF.push(module, 'b945cvDkR9HOIEvCykjLo65', 'RoomMgr');
// Script/components/RoomMgr.ts

"use strict";
/*
* desc：游戏房间管理
* @王全由
* date：2020/7/1
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RoomMgr = /** @class */ (function (_super) {
    __extends(RoomMgr, _super);
    function RoomMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerScrollView = null;
        _this.roomNum = null;
        _this.player = null;
        _this.playerPool = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    RoomMgr.prototype.onLoad = function () {
        this.newPlayerPool();
    };
    RoomMgr.prototype.start = function () {
        this.roomNum.string = "当前房间：";
    };
    /**
     * 创建玩家对象池
     */
    RoomMgr.prototype.newPlayerPool = function () {
        for (var i = 0; i < 12; i++) {
            var node = cc.instantiate(this.player);
            this.playerPool.push(node);
            //this.playerScrollView.content.addChild(node);  
        }
    };
    /**
     * 新玩家进入房间
     */
    RoomMgr.prototype.playerJoinRoom = function () {
    };
    __decorate([
        property(cc.ScrollView)
    ], RoomMgr.prototype, "playerScrollView", void 0);
    __decorate([
        property(cc.Label)
    ], RoomMgr.prototype, "roomNum", void 0);
    __decorate([
        property(cc.Prefab)
    ], RoomMgr.prototype, "player", void 0);
    RoomMgr = __decorate([
        ccclass
    ], RoomMgr);
    return RoomMgr;
}(cc.Component));
exports.default = RoomMgr;

cc._RF.pop();