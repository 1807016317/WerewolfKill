"use strict";
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