
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/components/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRzXFxMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztFQUlFO0FBQ0Ysd0NBQWtDO0FBQ2xDLDhDQUF3QztBQUN4Qyx5Q0FBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUQvQztRQUFBLHFFQWlDQztRQTdCQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLFlBQU0sR0FBYyxJQUFJLENBQUM7O1FBeUJ6QixpQkFBaUI7SUFDbkIsQ0FBQztJQXhCQyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHFCQUFLLEdBQUw7UUFDRSwrQkFBK0I7UUFDL0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCx1QkFBTyxHQUFQO1FBQ0UsZUFBSyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDRSwwQ0FBMEM7UUFDMUMsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0s7SUFOTixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBZ0N6QjtJQUFELFlBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ2tDLEVBQUUsQ0FBQyxTQUFTLEdBZ0M5QztrQkFoQ29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIG5hbWU6bG9naW5cclxuKiBhdXRob3I6d2FuZ3F1YW55b3VcclxuKiB0aW1lOjIwMjAvNS8yNFxyXG4qL1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4uL3Rvb2xzL1Rvb2xzXCJcclxuaW1wb3J0IG1ldGhvZElEIGZyb20gXCIuLi90b29scy9tZXRob2RJRFwiXHJcbmltcG9ydCBnX01nciA9IHJlcXVpcmUoXCIuLi9tYW5hZ2VyL0dsb2JhbFwiKTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEdhbWVIYWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICBidXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgc3RhcnQoKSB7XHJcbiAgICAvL3RoaXMuR2FtZUhhbGwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBnX01ncltcImV2ZW50SGFuZGxlXCJdLmFkZEV2ZW50KFwidG9HYW1lSGFsbFwiLCB0aGlzLnRvR2FtZUhhbGwuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnmbvlvZVcclxuICAgKi9cclxuICBvbkxvZ2luKCkge1xyXG4gICAgVG9vbHMubG9nKG1ldGhvZElELmxvZ2luLCBcIuiOt+WPluW+ruS/oeeZu+W9leaAgVwiKTtcclxuICAgIGdfTWdyW1widXNlck1nclwiXS53eExvZ2luKCk7XHJcbiAgfVxyXG5cclxuICB0b0dhbWVIYWxsKCl7XHJcbiAgICAvL2xldCBsb2dpbk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0xPR0lOXCIpO1xyXG4gICAgLy9sZXQgaGFsbE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0dBTUVIQUxMXCIpO1xyXG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5HYW1lSGFsbC5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==