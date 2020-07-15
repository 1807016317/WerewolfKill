"use strict";
cc._RF.push(module, 'b33571S3sRCCbfBPpaajuYL', 'Selfset');
// Script/components/Selfset.ts

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
/*
*	title: Selfset
*	desc: 自设板
*	auth: wangquanyou
*	date: 2020/06/21
*/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Selfset = /** @class */ (function (_super) {
    __extends(Selfset, _super);
    function Selfset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Selfset.prototype.start = function () {
    };
    Selfset.prototype.close = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], Selfset.prototype, "label", void 0);
    Selfset = __decorate([
        ccclass
    ], Selfset);
    return Selfset;
}(cc.Component));
exports.default = Selfset;

cc._RF.pop();