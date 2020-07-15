"use strict";
cc._RF.push(module, '1dce9xLrRdKV5I/e0bN0B7i', 'Preset');
// Script/components/Preset.ts

"use strict";
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
var preset = /** @class */ (function (_super) {
    __extends(preset, _super);
    function preset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Slider = null;
        _this.playerNumLab = null;
        _this.playerNum = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    preset.prototype.start = function () {
    };
    /**
     * 选择玩家人数
     */
    preset.prototype.selectPlayerNum = function () {
        var num = this.Slider.progress * 10;
        var addPlayer = (num / (10 / 6)).toFixed(0);
        this.playerNum = 6 + Number(addPlayer);
        this.playerNumLab.string = String(this.playerNum);
        this.getCard();
    };
    /**
     * 根据人数获取本局身份卡
     */
    preset.prototype.getCard = function () {
        var req = { playerNum: this.playerNumLab.string };
        g_Mgr["httpReqMgr"].reqCardOfPreset(req, function (res) {
            console.log("根据人数获取本局角色身份卡");
        });
    };
    preset.prototype.close = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Slider)
    ], preset.prototype, "Slider", void 0);
    __decorate([
        property(cc.Label)
    ], preset.prototype, "playerNumLab", void 0);
    preset = __decorate([
        ccclass
    ], preset);
    return preset;
}(cc.Component));
exports.default = preset;

cc._RF.pop();