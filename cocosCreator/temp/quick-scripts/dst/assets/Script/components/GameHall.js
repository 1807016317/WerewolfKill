
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/components/GameHall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRzXFxHYW1lSGFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7RUFJRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYseUNBQTRDO0FBRXRDLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUE2RUM7UUF6RUcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFjLElBQUksQ0FBQzs7UUE0RDFCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0RHLDREQUE0RDtJQUM1RCwyREFBMkQ7SUFDM0QsNkNBQTZDO0lBRTdDLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLDRDQUE0QztJQUNoRCxDQUFDO0lBRUQsS0FBSztJQUNMLCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsS0FBSztJQUNMLGtDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBQy9ELDJCQUEyQjtRQUMzQixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRztZQUMxRixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUE7UUFDRixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUF2RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBZlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTRFNUI7SUFBRCxlQUFDO0NBNUVELEFBNEVDLENBNUVxQyxFQUFFLENBQUMsU0FBUyxHQTRFakQ7a0JBNUVvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBkZXNj77ya5ri45oiP6YCJ5oup5aSn5Y6FXHJcbiogQOeOi+WFqOeUsVxyXG4qIGRhdGXvvJoyMDIwLzYvOVxyXG4qL1xyXG5cclxuaW1wb3J0IGdfTWdyID0gcmVxdWlyZShcIi4uL21hbmFnZXIvR2xvYmFsXCIpO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSGFsbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcmVzZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2V0QnlTZWxmOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhcmRJbnRyb2R1Y2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHVzZXJOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHVzZXJQaWM6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBcclxuICAgIC8vcHJvZmlsZU5hbWUgPSBnX01ncltcInVzZXJNZ3JcIl0ucHJvcGVydGllcy51c2VyTmFtZTsgLy/nlKjmiLfmmLXnp7BcclxuICAgIC8vYXZhdGFyVXJsID0gZ19NZ3JbXCJ1c2VyTWdyXCJdLnByb3BlcnRpZXMuYXZhdGFyVXJsOyAvL+eUqOaIt+WktOWDj1xyXG4gICAgLy9zZXggPSBnX01ncltcInVzZXJNZ3JcIl0ucHJvcGVydGllcy5zZXg7IC8v5oCn5YirXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBnX01ncltcImV2ZW50SGFuZGxlXCJdLmFkZEV2ZW50KFwic2V0VXNlckluZm9cIiwgdGhpcy5zZXRVc2VySW5mby5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnByZXNldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldEJ5U2VsZi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhcmRJbnRyb2R1Y2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vdGhpcy51c2VyUGljLnNwcml0ZUZyYW1lID0gdGhpcy5hdmF0YXJVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgLy/pooTorr7mnb9cclxuICAgIHNlbGVjdFByZXNldCgpe1xyXG4gICAgICAgIHRoaXMucHJlc2V0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRCeVNlbGYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYXJkSW50cm9kdWNlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6Ieq6K6+5p2/XHJcbiAgICBzZWxlY3RTZXRCeVNlbGYoKXtcclxuICAgICAgICB0aGlzLnNldEJ5U2VsZi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJlc2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FyZEludHJvZHVjZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+W8gOinkuiJsui6q+S7veWQjeivjeino+mHilxyXG4gICAgICovXHJcbiAgICBvbkNyYWREZXNjcmlibGUoKXtcclxuICAgICAgICB0aGlzLmNhcmRJbnRyb2R1Y2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXNldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldEJ5U2VsZi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFs+mXreinkuiJsui6q+S7veWQjeivjeino+mHilxyXG4gICAgICovXHJcbiAgICBvZmZDcmFkRGVzY3JpYmxlKCl7XHJcbiAgICAgICAgdGhpcy5jYXJkSW50cm9kdWNlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJlc2V0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0QnlTZWxmLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnVzZXJOYW1lLnN0cmluZyA9IGdfTWdyW1widXNlck1nclwiXS5wcm9wZXJ0aWVzLm5hbWU7IC8v55So5oi35pi156ewXHJcbiAgICAgICAgLy9jcmVhdG9yIDIuNCDlvIDlp4vlup/lvIMgbG9hZGVyIOexu1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiBnX01ncltcInVzZXJNZ3JcIl0ucHJvcGVydGllcy5hdmF0YXJVcmwsIHR5cGU6IFwianBnXCIgfSwgZnVuY3Rpb24gKGVyciwgdGV4KSB7XHJcbiAgICAgICAgICAgIHNlbGYudXNlclBpYy5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ19NZ3JbXCJldmVudEhhbmRsZVwiXS5lbWl0RXZlbnQoXCJ0b0dhbWVIYWxsXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=