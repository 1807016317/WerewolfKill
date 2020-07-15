
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/components/Preset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRzXFxQcmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTRDO0FBR3RDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUE2Q0M7UUF6Q0csWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixlQUFTLEdBQVcsQ0FBQyxDQUFDOztRQWtDdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFsQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0NBQWUsR0FBZjtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQU8sR0FBUDtRQUNJLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxHQUFHO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDVztJQU5iLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E0QzFCO0lBQUQsYUFBQztDQTVDRCxBQTRDQyxDQTVDbUMsRUFBRSxDQUFDLFNBQVMsR0E0Qy9DO2tCQTVDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnX01nciA9IHJlcXVpcmUoXCIuLi9tYW5hZ2VyL0dsb2JhbFwiKTtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJlc2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU2xpZGVyKVxyXG4gICAgU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHBsYXllck51bUxhYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwbGF5ZXJOdW06IE51bWJlciA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgInmi6nnjqnlrrbkurrmlbBcclxuICAgICAqL1xyXG4gICAgc2VsZWN0UGxheWVyTnVtKCkge1xyXG4gICAgICAgIGxldCBudW0gPSB0aGlzLlNsaWRlci5wcm9ncmVzcyAqIDEwO1xyXG4gICAgICAgIGxldCBhZGRQbGF5ZXIgPSAobnVtIC8gKDEwIC8gNikpLnRvRml4ZWQoMCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW0gPSA2ICsgTnVtYmVyKGFkZFBsYXllcik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW1MYWIuc3RyaW5nID0gU3RyaW5nKHRoaXMucGxheWVyTnVtKTtcclxuICAgICAgICB0aGlzLmdldENhcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruS6uuaVsOiOt+WPluacrOWxgOi6q+S7veWNoVxyXG4gICAgICovXHJcbiAgICBnZXRDYXJkKCkge1xyXG4gICAgICAgIGxldCByZXEgPSB7IHBsYXllck51bTogdGhpcy5wbGF5ZXJOdW1MYWIuc3RyaW5nIH07XHJcbiAgICAgICAgZ19NZ3JbXCJodHRwUmVxTWdyXCJdLnJlcUNhcmRPZlByZXNldChyZXEsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmoLnmja7kurrmlbDojrflj5bmnKzlsYDop5LoibLouqvku73ljaFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19