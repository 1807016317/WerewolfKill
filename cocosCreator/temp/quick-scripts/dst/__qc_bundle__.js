
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/components/AppStart');
require('./assets/Script/components/GameHall');
require('./assets/Script/components/Login');
require('./assets/Script/components/Preset');
require('./assets/Script/components/RoomMgr');
require('./assets/Script/components/Selfset');
require('./assets/Script/manager/AppMgr');
require('./assets/Script/manager/EventHandle');
require('./assets/Script/manager/Global');
require('./assets/Script/manager/UserMgr');
require('./assets/Script/serverConnect/Http');
require('./assets/Script/serverConnect/HttpReqMgr');
require('./assets/Script/tools/Tools');
require('./assets/Script/tools/methodID');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/serverConnect/HttpReqMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '319a79WOpROUo/+klJLhMBo', 'HttpReqMgr');
// Script/serverConnect/HttpReqMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
*	title: HttpReqMgr
*	desc: Http 请求接口管理
*	auth: wangquanyou
*	date: 2020/06/18
*/
var g_Mgr = require("../manager/Global");
var HttpReqMgr = /** @class */ (function () {
    function HttpReqMgr() {
        this.http = g_Mgr["http"];
    }
    /**
     * 微信小游戏登录凭证校验，用 code 获取 openid
     * @param code 调用微信小游戏客户端登录获取到的 code
     * @param callback 回调函数
     */
    HttpReqMgr.prototype.reqWxMiniLogin = function (code, callback) {
        this.http.sendRequest("/wxmini_auth", { code: code, os: "wxmini" }, callback);
    };
    /**
     * 将客户端接口获取到的微信用户信息存入数据库
     * @param userInfo
     * @param callback
     */
    HttpReqMgr.prototype.reqWxUserInfo = function (userInfo, callback) {
        this.http.sendRequest("/save_userInfo", userInfo, callback);
    };
    /**
     * 获取预设板对应人数的角色卡
     * @param playerNum
     * @param callback
     */
    HttpReqMgr.prototype.reqCardOfPreset = function (playerNum, callback) {
        this.http.sendRequest("/get_card_message", playerNum, callback, "https://www.oldwang.top:9002");
    };
    return HttpReqMgr;
}());
exports.default = HttpReqMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzZXJ2ZXJDb25uZWN0XFxIdHRwUmVxTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0VBS0U7QUFDRix5Q0FBNEM7QUFFNUM7SUFBQTtRQUNJLFNBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUEyQnpCLENBQUM7SUExQkc7Ozs7T0FJRztJQUNILG1DQUFjLEdBQWQsVUFBZSxJQUFJLEVBQUUsUUFBUTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtDQUFhLEdBQWIsVUFBYyxRQUFRLEVBQUUsUUFBUTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBZSxHQUFmLFVBQWdCLFNBQVMsRUFBRSxRQUFRO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKlx0dGl0bGU6IEh0dHBSZXFNZ3JcclxuKlx0ZGVzYzogSHR0cCDor7fmsYLmjqXlj6PnrqHnkIZcclxuKlx0YXV0aDogd2FuZ3F1YW55b3VcclxuKlx0ZGF0ZTogMjAyMC8wNi8xOCBcclxuKi9cclxuaW1wb3J0IGdfTWdyID0gcmVxdWlyZShcIi4uL21hbmFnZXIvR2xvYmFsXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcU1nciB7XHJcbiAgICBodHRwID0gZ19NZ3JbXCJodHRwXCJdO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvq7kv6HlsI/muLjmiI/nmbvlvZXlh63or4HmoKHpqozvvIznlKggY29kZSDojrflj5Ygb3BlbmlkXHJcbiAgICAgKiBAcGFyYW0gY29kZSDosIPnlKjlvq7kv6HlsI/muLjmiI/lrqLmiLfnq6/nmbvlvZXojrflj5bliLDnmoQgY29kZVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOWbnuiwg+WHveaVsFxyXG4gICAgICovXHJcbiAgICByZXFXeE1pbmlMb2dpbihjb2RlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuaHR0cC5zZW5kUmVxdWVzdChcIi93eG1pbmlfYXV0aFwiLCB7IGNvZGU6IGNvZGUsIG9zOiBcInd4bWluaVwiIH0sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwhuWuouaIt+err+aOpeWPo+iOt+WPluWIsOeahOW+ruS/oeeUqOaIt+S/oeaBr+WtmOWFpeaVsOaNruW6k1xyXG4gICAgICogQHBhcmFtIHVzZXJJbmZvIFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICByZXFXeFVzZXJJbmZvKHVzZXJJbmZvLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuaHR0cC5zZW5kUmVxdWVzdChcIi9zYXZlX3VzZXJJbmZvXCIsIHVzZXJJbmZvLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bpooTorr7mnb/lr7nlupTkurrmlbDnmoTop5LoibLljaFcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJOdW0gXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgIHJlcUNhcmRPZlByZXNldChwbGF5ZXJOdW0sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5odHRwLnNlbmRSZXF1ZXN0KFwiL2dldF9jYXJkX21lc3NhZ2VcIiwgcGxheWVyTnVtLCBjYWxsYmFjaywgXCJodHRwczovL3d3dy5vbGR3YW5nLnRvcDo5MDAyXCIpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/manager/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2da9dnUI8JHEKEvYcCUPAKh', 'Global');
// Script/manager/Global.ts

"use strict";
var g_Mgr = {};
module.exports = g_Mgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYW5hZ2VyXFxHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUVmLGlCQUFTLEtBQUssQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBnX01nciA9IHt9O1xyXG5cclxuZXhwb3J0ID0gZ19NZ3I7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/components/Selfset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRzXFxTZWxmc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztFQUtFO0FBQ0ksSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQURqRDtRQUFBLHFFQW1CQztRQWZHLFdBQUssR0FBYSxJQUFJLENBQUM7O1FBY3ZCLGlCQUFpQjtJQUNyQixDQUFDO0lBYkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQVpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0k7SUFITixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBa0IzQjtJQUFELGNBQUM7Q0FsQkQsQUFrQkMsQ0FsQm9DLEVBQUUsQ0FBQyxTQUFTLEdBa0JoRDtrQkFsQm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qXHR0aXRsZTogU2VsZnNldFxyXG4qXHRkZXNjOiDoh6rorr7mnb9cclxuKlx0YXV0aDogd2FuZ3F1YW55b3VcclxuKlx0ZGF0ZTogMjAyMC8wNi8yMSBcclxuKi9cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxmc2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/tools/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '566866QbMRK/ZL72bNRWe+p', 'Tools');
// Script/tools/Tools.ts

"use strict";
/*
* name:Tools
* describe：工具类
* author:wangquanyou
* time:2020/5/24
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Tools = /** @class */ (function () {
    function Tools() {
    }
    //日志输出
    Tools.log = function (methodID, msg) {
        if (typeof msg !== "string" || typeof methodID !== "number") {
            throw new Error("Expected string or number, got right typeof parameters.");
        }
        console.log("mthID:" + methodID + ", " + "msg:" + msg);
    };
    return Tools;
}());
exports.default = Tools;
//module.exports = Tools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0b29sc1xcVG9vbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztFQUtFOztBQUVGO0lBQUE7SUFTQSxDQUFDO0lBUEEsTUFBTTtJQUNDLFNBQUcsR0FBVixVQUFXLFFBQWdCLEVBQUUsR0FBVztRQUN2QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTs7QUFFRCx5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIG5hbWU6VG9vbHNcclxuKiBkZXNjcmliZe+8muW3peWFt+exu1xyXG4qIGF1dGhvcjp3YW5ncXVhbnlvdVxyXG4qIHRpbWU6MjAyMC81LzI0XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29scyB7XHJcblxyXG5cdC8v5pel5b+X6L6T5Ye6XHJcblx0c3RhdGljIGxvZyhtZXRob2RJRDogbnVtYmVyLCBtc2c6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0aWYgKHR5cGVvZiBtc2cgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIG1ldGhvZElEICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHN0cmluZyBvciBudW1iZXIsIGdvdCByaWdodCB0eXBlb2YgcGFyYW1ldGVycy5cIik7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhcIm10aElEOlwiICsgbWV0aG9kSUQgKyBcIiwgXCIgKyBcIm1zZzpcIiArIG1zZyk7XHJcblx0fVxyXG59XHJcblxyXG4vL21vZHVsZS5leHBvcnRzID0gVG9vbHM7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/components/AppStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21wb25lbnRzXFxBcHBTdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0VBS0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLDRDQUF1QztBQUVqQyxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBc0JDO1FBbEJHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsV0FBSyxHQUFZLElBQUksQ0FBQzs7UUFjdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFiRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFmRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFOTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qXHR0aXRsZTogQXBwU3RhcnRcclxuKlx0ZGVzYzog5bqU55So5byA5aeLXHJcbipcdGF1dGg6IHdhbmdxdWFueW91XHJcbipcdGRhdGU6IDIwMjAvMDYvMTcgXHJcbiovXHJcblxyXG5pbXBvcnQgQXBwTWdyIGZyb20gJy4uL21hbmFnZXIvQXBwTWdyJztcclxuICAgIFxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFN0YXJ0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhhbGw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9naW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgQXBwTWdyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgLy90aGlzLmhhbGwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2dpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/manager/EventHandle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc9e7vd0atLs4DfiZOXGFO7', 'EventHandle');
// Script/manager/EventHandle.ts

"use strict";
/*
*	title: EventHandle
*	desc: 事件管理
*	auth: wangquanyou
*	date: 2020/07/08
*/
Object.defineProperty(exports, "__esModule", { value: true });
var EventHandle = /** @class */ (function () {
    function EventHandle() {
    }
    /**
     * 判断事件是否存在，存在返回真
     * @param key
     */
    EventHandle.isNull = function (key) {
        if (this.eventArr[key] == null || this.eventArr[key] == undefined) {
            return false;
        }
        return true;
    };
    /**
     * 添加事件
     * @param key
     * @param callback
     */
    EventHandle.addEvent = function (key, callback) {
        if (this.isNull(key)) {
            return;
        }
        this.eventArr[key] = callback;
    };
    /**
     * 根据 key 值删除事件
     * @param key
     */
    EventHandle.deleteEventByKey = function (key) {
        if (this.isNull(key)) {
            delete this.eventArr[key];
            return true;
        }
        return false;
    };
    /**
     * 清空事件列表
     */
    EventHandle.clearAllEvent = function () {
        this.eventArr = {};
    };
    /**
     * 执行事件
     * @param key
     */
    EventHandle.emitEvent = function (key) {
        if (this.isNull(key)) {
            var callback = this.eventArr[key];
            callback();
        }
    };
    EventHandle.eventArr = {};
    return EventHandle;
}());
exports.default = EventHandle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYW5hZ2VyXFxFdmVudEhhbmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0VBS0U7O0FBRUY7SUFBQTtJQXVEQSxDQUFDO0lBcERHOzs7T0FHRztJQUNJLGtCQUFNLEdBQWIsVUFBYyxHQUFHO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUMvRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksb0JBQVEsR0FBZixVQUFnQixHQUFHLEVBQUUsUUFBUTtRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDRCQUFnQixHQUF2QixVQUF3QixHQUFHO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNJLHlCQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHFCQUFTLEdBQWhCLFVBQWlCLEdBQUc7UUFDaEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsUUFBUSxFQUFFLENBQUM7U0FDZDtJQUNMLENBQUM7SUFyRE0sb0JBQVEsR0FBRyxFQUFFLENBQUM7SUFzRHpCLGtCQUFDO0NBdkRELEFBdURDLElBQUE7a0JBdkRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKlx0dGl0bGU6IEV2ZW50SGFuZGxlXHJcbipcdGRlc2M6IOS6i+S7tueuoeeQhlxyXG4qXHRhdXRoOiB3YW5ncXVhbnlvdVxyXG4qXHRkYXRlOiAyMDIwLzA3LzA4IFxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRIYW5kbGUge1xyXG4gICAgc3RhdGljIGV2ZW50QXJyID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3kuovku7bmmK/lkKblrZjlnKjvvIzlrZjlnKjov5Tlm57nnJ9cclxuICAgICAqIEBwYXJhbSBrZXkgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bGwoa2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRBcnJba2V5XSA9PSBudWxsIHx8IHRoaXMuZXZlbnRBcnJba2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS6i+S7tlxyXG4gICAgICogQHBhcmFtIGtleSBcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZEV2ZW50KGtleSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodGhpcy5pc051bGwoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRBcnJba2V5XSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2uIGtleSDlgLzliKDpmaTkuovku7ZcclxuICAgICAqIEBwYXJhbSBrZXkgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWxldGVFdmVudEJ5S2V5KGtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVsbChrZXkpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50QXJyW2tleV07XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrkuovku7bliJfooahcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNsZWFyQWxsRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudEFyciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omn6KGM5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBlbWl0RXZlbnQoa2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOdWxsKGtleSkpIHtcclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5ldmVudEFycltrZXldO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/manager/UserMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ba67+o+XtJjrHQQ7wo/Z/v', 'UserMgr');
// Script/manager/UserMgr.ts

"use strict";
/*
*	title: UserMgr
*	desc: 用户管理
*	auth: wangquanyou
*	date: 2020/06/18
*/
Object.defineProperty(exports, "__esModule", { value: true });
var g_Mgr = require("./Global");
var Tools_1 = require("../tools/Tools");
var methodID_1 = require("../tools/methodID");
var UserMgr = /** @class */ (function () {
    function UserMgr() {
        this.properties = {
            openid: null,
            name: null,
            avatarUrl: null,
            sex: 0,
            lv: 0,
            exp: 0,
            coins: 0,
            gems: 0,
            sign: 0,
            ip: "",
            roomData: null,
            oldRoomId: null,
            address: {
                country: "",
                province: "",
                city: "",
            }
        };
    }
    /**
     * 微信小游戏登录
     */
    UserMgr.prototype.wxLogin = function () {
        var self = this;
        wx.login({
            success: function (res) {
                //res.code：用户登录凭证（有效期五分钟）。
                //开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid 和 session_key 等信息
                if (res.code) {
                    console.log("res:" + res.code);
                    //授权获取玩家信息t
                    self.getAuthorize();
                    //发起微信小游戏登录凭证校验请求
                    g_Mgr["httpReqMgr"].reqWxMiniLogin(res.code, function (data) {
                        var extraJson = data.extraJson;
                        var ret = data.ret;
                        if (ret.retcode == 0) {
                            self.properties.openid = extraJson.openid;
                            console.log("获取 openid 成功：" + extraJson.openid);
                        }
                        else {
                            console.log("获取 openid 失败:" + ret.msg);
                        }
                    });
                }
                else {
                    Tools_1.default.log(methodID_1.default.login, "登录失败！" + res.errMsg);
                }
            }
        });
        //cc.vv.wc.show("正在登录游戏");
    };
    ;
    /**
    * 向玩家申请授权
    * 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    */
    UserMgr.prototype.getAuthorize = function () {
        var self = this;
        wx.getSetting({
            success: function (res) {
                if (!res.authSetting['scope.record']) {
                    wx.authorize({
                        scope: 'scope.userInfo',
                        success: function () {
                            // 用户已经同意被获取用户信息
                            console.log('get userInfo success');
                            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                            wx.getUserInfo({
                                success: function (res) {
                                    var userInfo = res.userInfo; //用户信息
                                    self.properties.name = userInfo.nickName; //昵称
                                    self.properties.avatarUrl = userInfo.avatarUrl; //头像链接
                                    self.properties.sex = userInfo.gender; //性别 0：未知、1：男、2：女
                                    self.properties.address.country = userInfo.country; //国家
                                    self.properties.address.province = userInfo.province; //省份
                                    self.properties.address.city = userInfo.city; //城市
                                    g_Mgr["eventHandle"].emitEvent("setUserInfo");
                                    self.saveUserIfo();
                                    Tools_1.default.log(methodID_1.default.getUserIfo, "获取用户信息成功：" + userInfo);
                                },
                                fail: function (res) {
                                    console.log("获取用户信息失败:" + res);
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    ;
    /**
     * 将微信用户信息发送给服务器，存入数据库
     */
    UserMgr.prototype.saveUserIfo = function () {
        g_Mgr["httpReqMgr"].reqWxUserInfo(this.properties, function (res) {
            Tools_1.default.log(methodID_1.default.saveUserIfo, "存储" + res.msg);
        });
    };
    ;
    return UserMgr;
}());
exports.default = UserMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYW5hZ2VyXFxVc2VyTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7RUFLRTs7QUFFRixnQ0FBbUM7QUFDbkMsd0NBQW1DO0FBQ25DLDhDQUF5QztBQUV6QztJQUFBO1FBQ0UsZUFBVSxHQUFHO1lBQ1gsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUUsSUFBSTtZQUNWLFNBQVMsRUFBRSxJQUFJO1lBQ2YsR0FBRyxFQUFFLENBQUM7WUFDTixFQUFFLEVBQUUsQ0FBQztZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxDQUFDO1lBQ1AsRUFBRSxFQUFFLEVBQUU7WUFDTixRQUFRLEVBQUUsSUFBSTtZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFDO2dCQUNOLE9BQU8sRUFBQyxFQUFFO2dCQUNWLFFBQVEsRUFBQyxFQUFFO2dCQUNYLElBQUksRUFBQyxFQUFFO2FBQ1I7U0FDRixDQUFDO0lBaUZKLENBQUM7SUEvRUM7O09BRUc7SUFDSCx5QkFBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLFlBQUMsR0FBRztnQkFDVCwwQkFBMEI7Z0JBQzFCLHdFQUF3RTtnQkFDeEUsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsV0FBVztvQkFDWCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLGlCQUFpQjtvQkFDakIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsSUFBSTt3QkFDekQsSUFBSSxTQUFTLEdBQUcs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LFdBQVcsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFDSixjQUFDO0FBQUQsQ0FwR0EsQUFvR0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbipcdHRpdGxlOiBVc2VyTWdyXHJcbipcdGRlc2M6IOeUqOaIt+euoeeQhlxyXG4qXHRhdXRoOiB3YW5ncXVhbnlvdVxyXG4qXHRkYXRlOiAyMDIwLzA2LzE4IFxyXG4qL1xyXG5cclxuaW1wb3J0IGdfTWdyID0gcmVxdWlyZShcIi4vR2xvYmFsXCIpO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4uL3Rvb2xzL1Rvb2xzXCI7XHJcbmltcG9ydCBtZXRob2RJRCBmcm9tIFwiLi4vdG9vbHMvbWV0aG9kSURcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNZ3Ige1xyXG4gIHByb3BlcnRpZXMgPSB7XHJcbiAgICBvcGVuaWQ6IG51bGwsIC8v55So5oi3SURcclxuICAgIG5hbWU6IG51bGwsIC8v55So5oi35pi156ewXHJcbiAgICBhdmF0YXJVcmw6IG51bGwsIC8v55So5oi35aS05YOPXHJcbiAgICBzZXg6IDAsIC8v5oCn5YirXHJcbiAgICBsdjogMCwgLy/nrYnnuqdcclxuICAgIGV4cDogMCwgLy/nu4/pqoxcclxuICAgIGNvaW5zOiAwLCAvL+mHkemSsVxyXG4gICAgZ2VtczogMCwgLy/miL/ljaFcclxuICAgIHNpZ246IDAsIC8v562+5ZCNXHJcbiAgICBpcDogXCJcIiwgLy9JUFxyXG4gICAgcm9vbURhdGE6IG51bGwsIC8v5oi/6Ze05pWw5o2uXHJcbiAgICBvbGRSb29tSWQ6IG51bGwsIC8v6ICB5oi/6Ze0SURcclxuICAgIGFkZHJlc3M6e1xyXG4gICAgICBjb3VudHJ5OlwiXCIsXHJcbiAgICAgIHByb3ZpbmNlOlwiXCIsXHJcbiAgICAgIGNpdHk6XCJcIixcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiDlvq7kv6HlsI/muLjmiI/nmbvlvZVcclxuICAgKi9cclxuICB3eExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIC8vcmVzLmNvZGXvvJrnlKjmiLfnmbvlvZXlh63or4HvvIjmnInmlYjmnJ/kupTliIbpkp/vvInjgIJcclxuICAgICAgICAvL+W8gOWPkeiAhemcgOimgeWcqOW8gOWPkeiAheacjeWKoeWZqOWQjuWPsOiwg+eUqCBhdXRoLmNvZGUyU2Vzc2lvbu+8jOS9v+eUqCBjb2RlIOaNouWPliBvcGVuaWQg5ZKMIHNlc3Npb25fa2V5IOetieS/oeaBr1xyXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXM6XCIgKyByZXMuY29kZSk7XHJcbiAgICAgICAgICAvL+aOiOadg+iOt+WPlueOqeWutuS/oeaBr3RcclxuICAgICAgICAgIHNlbGYuZ2V0QXV0aG9yaXplKCk7XHJcbiAgICAgICAgICAvL+WPkei1t+W+ruS/oeWwj+a4uOaIj+eZu+W9leWHreivgeagoemqjOivt+axglxyXG4gICAgICAgICAgZ19NZ3JbXCJodHRwUmVxTWdyXCJdLnJlcVd4TWluaUxvZ2luKHJlcy5jb2RlLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgZXh0cmFKc29uID0gZGF0YS5leHRyYUpzb247XHJcbiAgICAgICAgICAgIGxldCByZXQgPSBkYXRhLnJldDtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXRjb2RlID09IDApIHtcclxuICAgICAgICAgICAgICBzZWxmLnByb3BlcnRpZXMub3BlbmlkID0gZXh0cmFKc29uLm9wZW5pZDtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPliBvcGVuaWQg5oiQ5Yqf77yaXCIgKyBleHRyYUpzb24ub3BlbmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPliBvcGVuaWQg5aSx6LSlOlwiICsgcmV0Lm1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUb29scy5sb2cobWV0aG9kSUQubG9naW4sIFwi55m75b2V5aSx6LSl77yBXCIgKyByZXMuZXJyTXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvL2NjLnZ2LndjLnNob3coXCLmraPlnKjnmbvlvZXmuLjmiI9cIik7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgKiDlkJHnjqnlrrbnlLPor7fmjojmnYNcclxuICAqIOWPr+S7pemAmui/hyB3eC5nZXRTZXR0aW5nIOWFiOafpeivouS4gOS4i+eUqOaIt+aYr+WQpuaOiOadg+S6hiBcInNjb3BlLnJlY29yZFwiIOi/meS4qiBzY29wZVxyXG4gICovXHJcbiAgZ2V0QXV0aG9yaXplKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnJlY29yZCddKSB7XHJcbiAgICAgICAgICB3eC5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICBzY29wZTogJ3Njb3BlLnVzZXJJbmZvJyxcclxuICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAvLyDnlKjmiLflt7Lnu4/lkIzmhI/ooqvojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IHVzZXJJbmZvIHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXHJcbiAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvOyAvL+eUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnRpZXMubmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lOyAvL+aYteensFxyXG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnRpZXMuYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsOyAvL+WktOWDj+mTvuaOpVxyXG4gICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnRpZXMuc2V4ID0gdXNlckluZm8uZ2VuZGVyOyAvL+aAp+WIqyAw77ya5pyq55+l44CBMe+8mueUt+OAgTLvvJrlpbNcclxuICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wZXJ0aWVzLmFkZHJlc3MuY291bnRyeSA9IHVzZXJJbmZvLmNvdW50cnk7IC8v5Zu95a62XHJcbiAgICAgICAgICAgICAgICAgIHNlbGYucHJvcGVydGllcy5hZGRyZXNzLnByb3ZpbmNlID0gdXNlckluZm8ucHJvdmluY2U7IC8v55yB5Lu9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGYucHJvcGVydGllcy5hZGRyZXNzLmNpdHkgPSB1c2VySW5mby5jaXR5OyAvL+WfjuW4glxyXG4gICAgICAgICAgICAgICAgICBnX01ncltcImV2ZW50SGFuZGxlXCJdLmVtaXRFdmVudChcInNldFVzZXJJbmZvXCIpO1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLnNhdmVVc2VySWZvKCk7XHJcbiAgICAgICAgICAgICAgICAgIFRvb2xzLmxvZyhtZXRob2RJRC5nZXRVc2VySWZvLCBcIuiOt+WPlueUqOaIt+S/oeaBr+aIkOWKn++8mlwiICsgdXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W55So5oi35L+h5oGv5aSx6LSlOlwiICsgcmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiDlsIblvq7kv6HnlKjmiLfkv6Hmga/lj5HpgIHnu5nmnI3liqHlmajvvIzlrZjlhaXmlbDmja7lupNcclxuICAgKi9cclxuICBzYXZlVXNlcklmbygpIHtcclxuICAgIGdfTWdyW1wiaHR0cFJlcU1nclwiXS5yZXFXeFVzZXJJbmZvKHRoaXMucHJvcGVydGllcywgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICBUb29scy5sb2cobWV0aG9kSUQuc2F2ZVVzZXJJZm8sIFwi5a2Y5YKoXCIgKyByZXMubXNnKTtcclxuICAgIH0pXHJcbiAgfTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/serverConnect/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50b0bjHpxxEG6QfEdz14g/P', 'Http');
// Script/serverConnect/Http.ts

"use strict";
/**
*   title: Http
*	desc: Http 请求
*	auth: wangquanyou
*	date: 2020/06/17
*/
Object.defineProperty(exports, "__esModule", { value: true });
var serverUrl = "https://www.oldwang.top:9001";
var master_url = null;
var url = null;
var token = null;
var outTimesMax = 20; //设置超时重试次数最大为20
var outTimes = 0;
init();
function init() {
    master_url = serverUrl;
    url = serverUrl;
}
;
/**
*
* @param url
*/
function setURL(url) {
    serverUrl = url;
    init();
}
exports.setURL = setURL;
;
/**
*
* @param path
* @param data
* @param handler
* @param extraUrl
*/
function sendRequest(path, data, handler, extraUrl) {
    var xhr = cc.loader.getXMLHttpRequest();
    xhr.timeout = 5000;
    if (data == null) {
        data = {};
    }
    if (token) {
        data.token = token;
    }
    if (extraUrl == null) {
        extraUrl = url;
    }
    //解析请求路由以及格式化请求参数
    var sendpath = path;
    var sendtext = '?';
    function praseData(data, sendtext) {
        for (var k in data) {
            if (sendtext != "?") {
                sendtext += "&";
            }
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object' && data[k] !== null) {
                    sendtext += (k + "=" + JSON.stringify(data[k]));
                }
                else {
                    sendtext += (k + "=" + data[k]);
                }
            }
        }
        return sendtext;
    }
    sendtext = praseData(data, sendtext);
    //组装完整的URL
    var requestURL = extraUrl + sendpath + encodeURI(sendtext);
    //发送请求
    console.log("RequestURL:" + requestURL);
    //open 初始化一个请求
    xhr.open("GET", requestURL, true);
    if (cc.sys.isNative) {
        //设置 HTTP 请求头的值。必须在 open() 之后、send() 之前调用
        xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    }
    function retryFunc() {
        sendRequest(path, data, handler, extraUrl);
        outTimes++;
    }
    ;
    var timer = setTimeout(function () {
        xhr["hasRetried"] = true;
        //abort 如果请求已被发出，则立刻中止请求
        xhr.abort();
        console.log('http timeout, retry');
        if (outTimes <= outTimesMax) {
            retryFunc();
        }
        else {
            console.log("retry stop, fails!!!");
            outTimes = 0;
        }
    }, 5000);
    xhr.onreadystatechange = function () {
        console.log("当 readyState 属性发生变化时，调用的处理程序");
        clearTimeout(timer);
        var ret = null;
        //成功的回应，status（200– 299）
        if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
            // console.log("http res(" + xhr.responseText.length + "):" + xhr.responseText);
            cc.log("request from [" + xhr.responseURL + "] data [", ret, "]");
            var respText = xhr.responseText;
            try {
                ret = JSON.parse(respText);
            }
            catch (e) {
                console.log("err:" + e);
                ret = {
                    errcode: -10001,
                    errmsg: e
                };
            }
            if (handler) {
                handler(ret);
            }
            handler = null;
        }
        else if (xhr.readyState === 4) {
            if (xhr["hasRetried"]) {
                return;
            }
            console.log('other readystate == 4' + ', status:' + xhr.status);
            setTimeout(function () {
                retryFunc();
            }, 5000);
        }
        else {
            console.log('other readystate:' + xhr.readyState + ', status:' + xhr.status);
        }
    };
    try {
        //发送请求。如果请求是异步的（默认），那么该方法将在请求发送后立即返回
        xhr.send();
    }
    catch (e) {
        //setTimeout(retryFunc, 200);
        retryFunc();
    }
    return xhr;
}
exports.sendRequest = sendRequest;
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzZXJ2ZXJDb25uZWN0XFxIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7RUFLRTs7QUFFRixJQUFJLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztBQUUvQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGVBQWU7QUFDckMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRWpCLElBQUksRUFBRSxDQUFDO0FBRVAsU0FBUyxJQUFJO0lBQ1QsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUN2QixHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQ3BCLENBQUM7QUFBQSxDQUFDO0FBRUY7OztFQUdFO0FBQ0YsU0FBZ0IsTUFBTSxDQUFDLEdBQUc7SUFDdEIsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQixJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUM7QUFIRCx3QkFHQztBQUFBLENBQUM7QUFFRjs7Ozs7O0VBTUU7QUFDRixTQUFnQixXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUTtJQUNyRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDeEMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFbkIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2QsSUFBSSxHQUFHLEVBQUUsQ0FBQztLQUNiO0lBQ0QsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0QjtJQUVELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtRQUNsQixRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ2xCO0lBRUQsaUJBQWlC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LElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsR0FBRyxHQUFHO29CQUNGLE9BQU8sRUFBRSxDQUFDLEtBQUs7b0JBQ2YsTUFBTSxFQUFFLENBQUM7aUJBQ1osQ0FBQzthQUNMO1lBRUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBRUQsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjthQUNJLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ25CLE9BQU87YUFDVjtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRSxVQUFVLENBQUM7Z0JBQ1AsU0FBUyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7YUFDSTtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hGO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsSUFBSTtRQUNBLG9DQUFvQztRQUNwQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDZDtJQUNELE9BQU8sQ0FBQyxFQUFFO1FBQ04sNkJBQTZCO1FBQzdCLFNBQVMsRUFBRSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUF0SEQsa0NBc0hDO0FBQUEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qICAgdGl0bGU6IEh0dHBcclxuKlx0ZGVzYzogSHR0cCDor7fmsYJcclxuKlx0YXV0aDogd2FuZ3F1YW55b3VcclxuKlx0ZGF0ZTogMjAyMC8wNi8xNyBcclxuKi9cclxuXHJcbmxldCBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vd3d3Lm9sZHdhbmcudG9wOjkwMDFcIjtcclxuXHJcbmxldCBtYXN0ZXJfdXJsID0gbnVsbDtcclxubGV0IHVybCA9IG51bGw7XHJcbmxldCB0b2tlbiA9IG51bGw7XHJcbmxldCBvdXRUaW1lc01heCA9IDIwOyAvL+iuvue9rui2heaXtumHjeivleasoeaVsOacgOWkp+S4ujIwXHJcbmxldCBvdXRUaW1lcyA9IDA7XHJcblxyXG5pbml0KCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbWFzdGVyX3VybCA9IHNlcnZlclVybDtcclxuICAgIHVybCA9IHNlcnZlclVybDtcclxufTtcclxuXHJcbi8qKlxyXG4qIFxyXG4qIEBwYXJhbSB1cmwgXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVUkwodXJsKSB7XHJcbiAgICBzZXJ2ZXJVcmwgPSB1cmw7XHJcbiAgICBpbml0KCk7XHJcbn07XHJcblxyXG4vKipcclxuKiBcclxuKiBAcGFyYW0gcGF0aCBcclxuKiBAcGFyYW0gZGF0YSBcclxuKiBAcGFyYW0gaGFuZGxlciBcclxuKiBAcGFyYW0gZXh0cmFVcmwgXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kUmVxdWVzdChwYXRoLCBkYXRhLCBoYW5kbGVyLCBleHRyYVVybCk6IFhNTEh0dHBSZXF1ZXN0IHtcclxuICAgIGxldCB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci50aW1lb3V0ID0gNTAwMDtcclxuXHJcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgZGF0YSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgZGF0YS50b2tlbiA9IHRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChleHRyYVVybCA9PSBudWxsKSB7XHJcbiAgICAgICAgZXh0cmFVcmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLy/op6PmnpDor7fmsYLot6/nlLHku6Xlj4rmoLzlvI/ljJbor7fmsYLlj4LmlbBcclxuICAgIGxldCBzZW5kcGF0aCA9IHBhdGg7XHJcbiAgICBsZXQgc2VuZHRleHQgPSAnPyc7XHJcbiAgICBmdW5jdGlvbiBwcmFzZURhdGEoZGF0YSwgc2VuZHRleHQpIHtcclxuICAgICAgICBmb3IgKGxldCBrIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHNlbmR0ZXh0ICE9IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzZW5kdGV4dCArPSBcIiZcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2tdID09PSAnb2JqZWN0JyAmJiBkYXRhW2tdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZHRleHQgKz0gKGsgKyBcIj1cIiArIEpTT04uc3RyaW5naWZ5KGRhdGFba10pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZHRleHQgKz0gKGsgKyBcIj1cIiArIGRhdGFba10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZW5kdGV4dDtcclxuICAgIH1cclxuICAgIHNlbmR0ZXh0ID0gcHJhc2VEYXRhKGRhdGEsIHNlbmR0ZXh0KTtcclxuXHJcbiAgICAvL+e7hOijheWujOaVtOeahFVSTFxyXG4gICAgbGV0IHJlcXVlc3RVUkwgPSBleHRyYVVybCArIHNlbmRwYXRoICsgZW5jb2RlVVJJKHNlbmR0ZXh0KTtcclxuXHJcbiAgICAvL+WPkemAgeivt+axglxyXG4gICAgY29uc29sZS5sb2coXCJSZXF1ZXN0VVJMOlwiICsgcmVxdWVzdFVSTCk7XHJcbiAgICAvL29wZW4g5Yid5aeL5YyW5LiA5Liq6K+35rGCXHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCByZXF1ZXN0VVJMLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgLy/orr7nva4gSFRUUCDor7fmsYLlpLTnmoTlgLzjgILlv4XpobvlnKggb3BlbigpIOS5i+WQjuOAgXNlbmQoKSDkuYvliY3osIPnlKhcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcmV0cnlGdW5jKCkge1xyXG4gICAgICAgIHNlbmRSZXF1ZXN0KHBhdGgsIGRhdGEsIGhhbmRsZXIsIGV4dHJhVXJsKTtcclxuICAgICAgICBvdXRUaW1lcysrO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB4aHJbXCJoYXNSZXRyaWVkXCJdID0gdHJ1ZTtcclxuICAgICAgICAvL2Fib3J0IOWmguaenOivt+axguW3suiiq+WPkeWHuu+8jOWImeeri+WIu+S4reatouivt+axglxyXG4gICAgICAgIHhoci5hYm9ydCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdodHRwIHRpbWVvdXQsIHJldHJ5Jyk7XHJcbiAgICAgICAgaWYgKG91dFRpbWVzIDw9IG91dFRpbWVzTWF4KSB7XHJcbiAgICAgICAgICAgIHJldHJ5RnVuYygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0cnkgc3RvcCwgZmFpbHMhISFcIik7XHJcbiAgICAgICAgICAgIG91dFRpbWVzID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9LCA1MDAwKTtcclxuXHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b2TIHJlYWR5U3RhdGUg5bGe5oCn5Y+R55Sf5Y+Y5YyW5pe277yM6LCD55So55qE5aSE55CG56iL5bqPXCIpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgbGV0IHJldCA9IG51bGw7XHJcbiAgICAgICAgLy/miJDlip/nmoTlm57lupTvvIxzdGF0dXPvvIgyMDDigJMgMjk577yJXHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImh0dHAgcmVzKFwiICsgeGhyLnJlc3BvbnNlVGV4dC5sZW5ndGggKyBcIik6XCIgKyB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgY2MubG9nKFwicmVxdWVzdCBmcm9tIFtcIiArIHhoci5yZXNwb25zZVVSTCArIFwiXSBkYXRhIFtcIiwgcmV0LCBcIl1cIik7XHJcbiAgICAgICAgICAgIGxldCByZXNwVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gSlNPTi5wYXJzZShyZXNwVGV4dCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyOlwiICsgZSk7XHJcbiAgICAgICAgICAgICAgICByZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyY29kZTogLTEwMDAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm1zZzogZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIocmV0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGlmICh4aHJbXCJoYXNSZXRyaWVkXCJdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvdGhlciByZWFkeXN0YXRlID09IDQnICsgJywgc3RhdHVzOicgKyB4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXRyeUZ1bmMoKTtcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3RoZXIgcmVhZHlzdGF0ZTonICsgeGhyLnJlYWR5U3RhdGUgKyAnLCBzdGF0dXM6JyArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL+WPkemAgeivt+axguOAguWmguaenOivt+axguaYr+W8guatpeeahO+8iOm7mOiupO+8ie+8jOmCo+S5iOivpeaWueazleWwhuWcqOivt+axguWPkemAgeWQjueri+WNs+i/lOWbnlxyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vc2V0VGltZW91dChyZXRyeUZ1bmMsIDIwMCk7XHJcbiAgICAgICAgcmV0cnlGdW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHhocjtcclxufTtcclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/tools/methodID.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adae4jZAWhBIZ4YyMOpQLZD', 'methodID');
// Script/tools/methodID.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
* name:methodID
* describe：方法数ID
* author:wangquanyou
* time:2020/5/24
*/
var methodID = /** @class */ (function () {
    function methodID() {
    }
    methodID.login = 111; //登录
    methodID.getUserIfo = 112; //首次获取用户信息
    methodID.saveUserIfo = 113; //保存微信用户信息
    return methodID;
}());
exports.default = methodID;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0b29sc1xcbWV0aG9kSUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7RUFLRTtBQUNGO0lBQUE7SUFJQSxDQUFDO0lBSE8sY0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUk7SUFDakIsbUJBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVO0lBQzVCLG9CQUFXLEdBQUcsR0FBRyxDQUFDLENBQUMsVUFBVTtJQUNyQyxlQUFDO0NBSkQsQUFJQyxJQUFBO2tCQUpvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBuYW1lOm1ldGhvZElEXHJcbiogZGVzY3JpYmXvvJrmlrnms5XmlbBJRFxyXG4qIGF1dGhvcjp3YW5ncXVhbnlvdVxyXG4qIHRpbWU6MjAyMC81LzI0XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1ldGhvZElEIHtcclxuXHRzdGF0aWMgbG9naW4gPSAxMTE7XHQvL+eZu+W9lVxyXG5cdHN0YXRpYyBnZXRVc2VySWZvID0gMTEyO1x0Ly/pppbmrKHojrflj5bnlKjmiLfkv6Hmga9cclxuXHRzdGF0aWMgc2F2ZVVzZXJJZm8gPSAxMTM7XHQvL+S/neWtmOW+ruS/oeeUqOaIt+S/oeaBr1xyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/manager/AppMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5708dP/MaFKNLaqxXMCYMT9', 'AppMgr');
// Script/manager/AppMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
*	title: AppMgr
*	desc: 应用管理
*	auth: wangquanyou
*	date: 2020/06/17
*/
var appMgr_Instance = null;
var g_Mgr = require("./Global");
var Http = require("../serverConnect/Http");
var HttpReqMgr_1 = require("../serverConnect/HttpReqMgr");
var UserMgr_1 = require("./UserMgr");
var EventHandle_1 = require("./EventHandle");
var AppMgr = /** @class */ (function () {
    function AppMgr() {
        this.initMgr();
    }
    AppMgr.getInstance = function () {
        if (appMgr_Instance == null || appMgr_Instance == undefined) {
            appMgr_Instance = new AppMgr();
            return appMgr_Instance;
        }
        return appMgr_Instance;
    };
    /**
     * URL 解析
     */
    AppMgr.prototype.urlParse = function () {
        var params = {};
        if (window.location == null) {
            return params;
        }
        var name, value;
        var str = window.location.href; //取得整个地址栏
        var num = str.indexOf("?");
        str = str.substr(num + 1); //取得所有参数   stringlet.substr(start [, length ]
        var arr = str.split("&"); //各个参数放到数组里
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                params[name] = value;
            }
        }
        return params;
    };
    ;
    /**
     * 手动初始化生命周期
     */
    AppMgr.prototype.initMgr = function () {
        //g_Mgr 中的 key 值一律使用驼峰式
        cc["appMgr"] = {};
        g_Mgr["appMgr"] = {};
        console.log("app" + cc["appMgr"]);
        g_Mgr["userMgr"] = new UserMgr_1.default();
        g_Mgr["eventHandle"] = EventHandle_1.default;
        //let ReplayMgr = require("ReplayMgr");
        //g_Mgr["replayMgr"] = new ReplayMgr();
        g_Mgr["http"] = Http;
        g_Mgr["httpReqMgr"] = new HttpReqMgr_1.default();
        //g_Mgr["global"] = require("Global");
        //g_Mgr["net"] = require("Net");
        //let GameNetMgr = require("GameNetMgr");
        //g_Mgr["gameNetMgr"] = new GameNetMgr();
        //g_Mgr["gameNetMgr"].initHandlers();
        //let Utils = require("Utils");
        //g_Mgr["utils"] = new Utils();
        //let MJUtil = require("MJUtil");
        //g_Mgr.mjutil = new MJUtil();
        //cc["args"] = this.urlParse();
        g_Mgr["args"] = this.urlParse();
    };
    ;
    return AppMgr;
}());
exports.default = AppMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYW5hZ2VyXFxBcHBNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7RUFLRTtBQUNGLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQztBQUUzQixnQ0FBbUM7QUFDbkMsNENBQStDO0FBQy9DLDBEQUFxRDtBQUNyRCxxQ0FBZ0M7QUFDaEMsNkNBQXdDO0FBRXhDO0lBQ0k7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLGtCQUFXLEdBQWxCO1FBQ0ksSUFBRyxlQUFlLElBQUksSUFBSSxJQUFJLGVBQWUsSUFBSSxTQUFTLEVBQUM7WUFDdkQsZUFBZSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7WUFDL0IsT0FBTyxlQUFlLENBQUM7U0FDMUI7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDekIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFDRCxJQUFJLElBQUksRUFBRSxLQUFLLENBQUM7UUFDaEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTO1FBQ3pDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsNkNBQTZDO1FBRXhFLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDVCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN4QjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNLLHdCQUFPLEdBQWY7UUFDSSx1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRWxDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUVqQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcscUJBQVcsQ0FBQztRQUVuQyx1Q0FBdUM7UUFDdkMsdUNBQXVDO1FBRXZDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckIsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQ3ZDLHNDQUFzQztRQUN0QyxnQ0FBZ0M7UUFFaEMseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QyxxQ0FBcUM7UUFFckMsK0JBQStCO1FBQy9CLCtCQUErQjtRQUUvQixpQ0FBaUM7UUFDakMsOEJBQThCO1FBRTlCLCtCQUErQjtRQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFBQSxDQUFDO0lBQ04sYUFBQztBQUFELENBeEVBLEFBd0VDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qXHR0aXRsZTogQXBwTWdyXHJcbipcdGRlc2M6IOW6lOeUqOeuoeeQhlxyXG4qXHRhdXRoOiB3YW5ncXVhbnlvdVxyXG4qXHRkYXRlOiAyMDIwLzA2LzE3IFxyXG4qL1xyXG5sZXQgYXBwTWdyX0luc3RhbmNlID0gbnVsbDtcclxuXHJcbmltcG9ydCBnX01nciA9IHJlcXVpcmUoXCIuL0dsb2JhbFwiKTtcclxuaW1wb3J0IEh0dHAgPSByZXF1aXJlKFwiLi4vc2VydmVyQ29ubmVjdC9IdHRwXCIpO1xyXG5pbXBvcnQgSHR0cFJlcU1nciBmcm9tIFwiLi4vc2VydmVyQ29ubmVjdC9IdHRwUmVxTWdyXCI7XHJcbmltcG9ydCBVc2VyTWdyIGZyb20gXCIuL1VzZXJNZ3JcIjtcclxuaW1wb3J0IEV2ZW50SGFuZGxlIGZyb20gXCIuL0V2ZW50SGFuZGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBNZ3Ige1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuaW5pdE1ncigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xyXG4gICAgICAgIGlmKGFwcE1ncl9JbnN0YW5jZSA9PSBudWxsIHx8IGFwcE1ncl9JbnN0YW5jZSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBhcHBNZ3JfSW5zdGFuY2UgPSBuZXcgQXBwTWdyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBNZ3JfSW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcHBNZ3JfSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVUkwg6Kej5p6QXHJcbiAgICAgKi9cclxuICAgIHVybFBhcnNlKCkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7fTtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hbWUsIHZhbHVlO1xyXG4gICAgICAgIGxldCBzdHIgPSB3aW5kb3cubG9jYXRpb24uaHJlZjsgLy/lj5blvpfmlbTkuKrlnLDlnYDmoI9cclxuICAgICAgICBsZXQgbnVtID0gc3RyLmluZGV4T2YoXCI/XCIpXHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cihudW0gKyAxKTsgLy/lj5blvpfmiYDmnInlj4LmlbAgICBzdHJpbmdsZXQuc3Vic3RyKHN0YXJ0IFssIGxlbmd0aCBdXHJcblxyXG4gICAgICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCImXCIpOyAvL+WQhOS4quWPguaVsOaUvuWIsOaVsOe7hOmHjFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bSA9IGFycltpXS5pbmRleE9mKFwiPVwiKTtcclxuICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBhcnJbaV0uc3Vic3RyaW5nKDAsIG51bSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFycltpXS5zdWJzdHIobnVtICsgMSk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyYW1zO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJi+WKqOWIneWni+WMlueUn+WRveWRqOacn1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRNZ3IoKSB7XHJcbiAgICAgICAgLy9nX01nciDkuK3nmoQga2V5IOWAvOS4gOW+i+S9v+eUqOmpvOWzsOW8j1xyXG4gICAgICAgIGNjW1wiYXBwTWdyXCJdID0ge307XHJcbiAgICAgICAgZ19NZ3JbXCJhcHBNZ3JcIl0gPSB7fTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFwcFwiICsgY2NbXCJhcHBNZ3JcIl0pO1xyXG5cclxuICAgICAgICBnX01ncltcInVzZXJNZ3JcIl0gPSBuZXcgVXNlck1ncigpO1xyXG5cclxuICAgICAgICBnX01ncltcImV2ZW50SGFuZGxlXCJdID0gRXZlbnRIYW5kbGU7XHJcblxyXG4gICAgICAgIC8vbGV0IFJlcGxheU1nciA9IHJlcXVpcmUoXCJSZXBsYXlNZ3JcIik7XHJcbiAgICAgICAgLy9nX01ncltcInJlcGxheU1nclwiXSA9IG5ldyBSZXBsYXlNZ3IoKTtcclxuXHJcbiAgICAgICAgZ19NZ3JbXCJodHRwXCJdID0gSHR0cDtcclxuICAgICAgICBnX01ncltcImh0dHBSZXFNZ3JcIl0gPSBuZXcgSHR0cFJlcU1ncigpO1xyXG4gICAgICAgIC8vZ19NZ3JbXCJnbG9iYWxcIl0gPSByZXF1aXJlKFwiR2xvYmFsXCIpO1xyXG4gICAgICAgIC8vZ19NZ3JbXCJuZXRcIl0gPSByZXF1aXJlKFwiTmV0XCIpO1xyXG5cclxuICAgICAgICAvL2xldCBHYW1lTmV0TWdyID0gcmVxdWlyZShcIkdhbWVOZXRNZ3JcIik7XHJcbiAgICAgICAgLy9nX01ncltcImdhbWVOZXRNZ3JcIl0gPSBuZXcgR2FtZU5ldE1ncigpO1xyXG4gICAgICAgIC8vZ19NZ3JbXCJnYW1lTmV0TWdyXCJdLmluaXRIYW5kbGVycygpO1xyXG5cclxuICAgICAgICAvL2xldCBVdGlscyA9IHJlcXVpcmUoXCJVdGlsc1wiKTtcclxuICAgICAgICAvL2dfTWdyW1widXRpbHNcIl0gPSBuZXcgVXRpbHMoKTtcclxuXHJcbiAgICAgICAgLy9sZXQgTUpVdGlsID0gcmVxdWlyZShcIk1KVXRpbFwiKTtcclxuICAgICAgICAvL2dfTWdyLm1qdXRpbCA9IG5ldyBNSlV0aWwoKTtcclxuXHJcbiAgICAgICAgLy9jY1tcImFyZ3NcIl0gPSB0aGlzLnVybFBhcnNlKCk7XHJcbiAgICAgICAgZ19NZ3JbXCJhcmdzXCJdID0gdGhpcy51cmxQYXJzZSgpO1xyXG4gICAgfTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------
