/*
*	title: EventHandle
*	desc: 事件管理
*	auth: wangquanyou
*	date: 2020/07/08 
*/

export default class EventHandle {
    static eventArr = {};

    /**
     * 判断事件是否存在，存在返回真
     * @param key 
     */
    static isNull(key): boolean {
        if (this.eventArr[key] == null || this.eventArr[key] == undefined) {
            return false;
        }
        return true;
    }

    /**
     * 添加事件
     * @param key 
     * @param callback 
     */
    static addEvent(key, callback) {
        if (this.isNull(key)) {
            return;
        }
        this.eventArr[key] = callback;
    }

    /**
     * 根据 key 值删除事件
     * @param key 
     */
    static deleteEventByKey(key): boolean {
        if (this.isNull(key)) {
            delete this.eventArr[key];
            return true;
        }
        return false;
    }

    /**
     * 清空事件列表
     */
    static clearAllEvent() {
        this.eventArr = {};
    }

    /**
     * 执行事件
     * @param key
     */
    static emitEvent(key) {
        if (this.isNull(key)) {
            let callback = this.eventArr[key];
            callback();
        }
    }
}
