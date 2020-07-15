"use strict";
cc._RF.push(module, '73890p0fh9FbbcPub/dUHaW', 'GameHall');
// Script/components/GameHall.ts

"use strict";
/*
* desc：游戏选择大厅
* @王全由
* date：2020/6/9
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
var g_Mgr = require("../manager/Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameHall = /** @class */ (function (_super) {
    __extends(GameHall, _super);
    function GameHall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preset = null;
        _this.setBySelf = null;
        _this.cardIntroduce = null;
        _this.userName = null;
        _this.userPic = null;
        return _this;
        // update (dt) {}
    }
    //profileName = g_Mgr["userMgr"].properties.userName; //用户昵称
    //avatarUrl = g_Mgr["userMgr"].properties.avatarUrl; //用户头像
    //sex = g_Mgr["userMgr"].properties.sex; //性别
    // LIFE-CYCLE CALLBACKS:
    GameHall.prototype.onLoad = function () {
        g_Mgr["eventHandle"].addEvent("setUserInfo", this.setUserInfo.bind(this));
        this.preset.active = false;
        this.setBySelf.active = false;
        this.cardIntroduce.active = false;
    };
    GameHall.prototype.start = function () {
        //this.userPic.spriteFrame = this.avatarUrl;
    };
    //预设板
    GameHall.prototype.selectPreset = function () {
        this.preset.active = true;
        this.setBySelf.active = false;
        this.cardIntroduce.active = false;
    };
    //自设板
    GameHall.prototype.selectSetBySelf = function () {
        this.setBySelf.active = true;
        this.preset.active = false;
        this.cardIntroduce.active = false;
    };
    /**
     * 打开角色身份名词解释
     */
    GameHall.prototype.onCradDescrible = function () {
        this.cardIntroduce.active = true;
        this.preset.active = false;
        this.setBySelf.active = false;
    };
    /**
     * 关闭角色身份名词解释
     */
    GameHall.prototype.offCradDescrible = function () {
        this.cardIntroduce.active = false;
        this.preset.active = false;
        this.setBySelf.active = false;
    };
    GameHall.prototype.setUserInfo = function () {
        var self = this;
        self.userName.string = g_Mgr["userMgr"].properties.name; //用户昵称
        //creator 2.4 开始废弃 loader 类
        cc.loader.load({ url: g_Mgr["userMgr"].properties.avatarUrl, type: "jpg" }, function (err, tex) {
            self.userPic.spriteFrame = new cc.SpriteFrame(tex);
        });
        g_Mgr["eventHandle"].emitEvent("toGameHall");
    };
    __decorate([
        property(cc.Node)
    ], GameHall.prototype, "preset", void 0);
    __decorate([
        property(cc.Node)
    ], GameHall.prototype, "setBySelf", void 0);
    __decorate([
        property(cc.Node)
    ], GameHall.prototype, "cardIntroduce", void 0);
    __decorate([
        property(cc.Label)
    ], GameHall.prototype, "userName", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameHall.prototype, "userPic", void 0);
    GameHall = __decorate([
        ccclass
    ], GameHall);
    return GameHall;
}(cc.Component));
exports.default = GameHall;

cc._RF.pop();