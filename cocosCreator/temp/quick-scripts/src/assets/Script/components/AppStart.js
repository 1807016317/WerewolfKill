"use strict";
cc._RF.push(module, '8e67avX8BREc4BXIgaMbwaT', 'AppStart');
// Script/components/AppStart.ts

"use strict";
/*
*	title: AppStart
*	desc: 应用开始
*	auth: wangquanyou
*	date: 2020/06/17
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
var AppMgr_1 = require("../manager/AppMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AppStart = /** @class */ (function (_super) {
    __extends(AppStart, _super);
    function AppStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hall = null;
        _this.login = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    AppStart.prototype.onLoad = function () {
        AppMgr_1.default.getInstance();
        //this.hall.active = false;
        this.login.active = true;
    };
    AppStart.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], AppStart.prototype, "hall", void 0);
    __decorate([
        property(cc.Node)
    ], AppStart.prototype, "login", void 0);
    AppStart = __decorate([
        ccclass
    ], AppStart);
    return AppStart;
}(cc.Component));
exports.default = AppStart;

cc._RF.pop();