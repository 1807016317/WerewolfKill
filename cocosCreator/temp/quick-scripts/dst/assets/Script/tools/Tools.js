
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