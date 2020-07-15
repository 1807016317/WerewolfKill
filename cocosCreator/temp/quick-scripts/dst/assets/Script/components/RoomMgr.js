
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/components/RoomMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRzXFxSb29tTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztFQUlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBRGpEO1FBQUEscUVBeUNDO1FBckNHLHNCQUFnQixHQUFrQixJQUFJLENBQUM7UUFHdkMsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQUcsRUFBRSxDQUFDOztRQTRCaEIsaUJBQWlCO0lBQ3JCLENBQUM7SUE1Qkcsd0JBQXdCO0lBRXhCLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUU7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQWEsR0FBYjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsaURBQWlEO1NBQ3BEO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0NBQWMsR0FBZDtJQUVBLENBQUM7SUFuQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztxREFDZTtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0s7SUFUUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBd0MzQjtJQUFELGNBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q29DLEVBQUUsQ0FBQyxTQUFTLEdBd0NoRDtrQkF4Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIGRlc2PvvJrmuLjmiI/miL/pl7TnrqHnkIZcclxuKiBA546L5YWo55SxXHJcbiogZGF0Ze+8mjIwMjAvNy8xXHJcbiovXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb21NZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgcGxheWVyU2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcm9vbU51bTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwbGF5ZXI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcGxheWVyUG9vbCA9IFtdO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5ld1BsYXllclBvb2woKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtLnN0cmluZyA9IFwi5b2T5YmN5oi/6Ze077yaXCIgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu6546p5a625a+56LGh5rGgXHJcbiAgICAgKi9cclxuICAgIG5ld1BsYXllclBvb2woKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyUG9vbC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAvL3RoaXMucGxheWVyU2Nyb2xsVmlldy5jb250ZW50LmFkZENoaWxkKG5vZGUpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5paw546p5a626L+b5YWl5oi/6Ze0XHJcbiAgICAgKi9cclxuICAgIHBsYXllckpvaW5Sb29tKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19