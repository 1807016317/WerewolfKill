"use strict";
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