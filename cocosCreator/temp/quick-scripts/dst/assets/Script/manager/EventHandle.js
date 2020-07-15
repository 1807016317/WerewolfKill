
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