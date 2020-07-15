"use strict";
cc._RF.push(module, '83dc1OjAq9HrZaOUilqhv0C', 'Login');
// Script/components/Login.ts

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
* name:login
* author:wangquanyou
* time:2020/5/24
*/
var Tools_1 = require("../tools/Tools");
var methodID_1 = require("../tools/methodID");
var g_Mgr = require("../manager/Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameHall = null;
        _this.button = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Login.prototype.start = function () {
        //this.GameHall.active = false;
        g_Mgr["eventHandle"].addEvent("toGameHall", this.toGameHall.bind(this));
    };
    /**
     * 登录
     */
    Login.prototype.onLogin = function () {
        Tools_1.default.log(methodID_1.default.login, "获取微信登录态");
        g_Mgr["userMgr"].wxLogin();
    };
    Login.prototype.toGameHall = function () {
        //let loginNode = cc.find("Canvas/LOGIN");
        //let hallNode = cc.find("Canvas/GAMEHALL");
        this.node.active = false;
        this.GameHall.active = true;
    };
    __decorate([
        property(cc.Node)
    ], Login.prototype, "GameHall", void 0);
    __decorate([
        property(cc.Button)
    ], Login.prototype, "button", void 0);
    Login = __decorate([
        ccclass
    ], Login);
    return Login;
}(cc.Component));
exports.default = Login;

cc._RF.pop();