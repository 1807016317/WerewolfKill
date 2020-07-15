
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
            if (data[k].__proto__ !== null || data[k].__proto__ !== undefined) {
                praseData(data[k], sendtext);
            }
            if (sendtext != "?") {
                sendtext += "&";
            }
            sendtext += (k + "=" + data[k]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzZXJ2ZXJDb25uZWN0XFxIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7RUFLRTs7QUFFRixJQUFJLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztBQUUvQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGVBQWU7QUFDckMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRWpCLElBQUksRUFBRSxDQUFDO0FBRVAsU0FBUyxJQUFJO0lBQ1QsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUN2QixHQUFHLEdBQUcsU0FBUyxDQUFDO0FBQ3BCLENBQUM7QUFBQSxDQUFDO0FBRUY7OztFQUdFO0FBQ0YsU0FBZ0IsTUFBTSxDQUFDLEdBQUc7SUFDdEIsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQixJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUM7QUFIRCx3QkFHQztBQUFBLENBQUM7QUFFRjs7Ozs7O0VBTUU7QUFDRixTQUFnQixXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUTtJQUNyRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDeEMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFbkIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2QsSUFBSSxHQUFHLEVBQUUsQ0FBQztLQUNiO0lBQ0QsSUFBSSxLQUFLLEVBQUU7UUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0QjtJQUVELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtRQUNsQixRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ2xCO0lBRUQsaUJBQWlC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TSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixHQUFHLEdBQUc7b0JBQ0YsT0FBTyxFQUFFLENBQUMsS0FBSztvQkFDZixNQUFNLEVBQUUsQ0FBQztpQkFDWixDQUFDO2FBQ0w7WUFFRCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEI7WUFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO2FBQ0ksSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDbkIsT0FBTzthQUNWO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLFVBQVUsQ0FBQztnQkFDUCxTQUFTLEVBQUUsQ0FBQztZQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjthQUNJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEY7SUFDTCxDQUFDLENBQUM7SUFFRixJQUFJO1FBQ0Esb0NBQW9DO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNkO0lBQ0QsT0FBTyxDQUFDLEVBQUU7UUFDTiw2QkFBNkI7UUFDN0IsU0FBUyxFQUFFLENBQUM7S0FDZjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQW5IRCxrQ0FtSEM7QUFBQSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiogICB0aXRsZTogSHR0cFxyXG4qXHRkZXNjOiBIdHRwIOivt+axglxyXG4qXHRhdXRoOiB3YW5ncXVhbnlvdVxyXG4qXHRkYXRlOiAyMDIwLzA2LzE3IFxyXG4qL1xyXG5cclxubGV0IHNlcnZlclVybCA9IFwiaHR0cHM6Ly93d3cub2xkd2FuZy50b3A6OTAwMVwiO1xyXG5cclxubGV0IG1hc3Rlcl91cmwgPSBudWxsO1xyXG5sZXQgdXJsID0gbnVsbDtcclxubGV0IHRva2VuID0gbnVsbDtcclxubGV0IG91dFRpbWVzTWF4ID0gMjA7IC8v6K6+572u6LaF5pe26YeN6K+V5qyh5pWw5pyA5aSn5Li6MjBcclxubGV0IG91dFRpbWVzID0gMDtcclxuXHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBtYXN0ZXJfdXJsID0gc2VydmVyVXJsO1xyXG4gICAgdXJsID0gc2VydmVyVXJsO1xyXG59O1xyXG5cclxuLyoqXHJcbiogXHJcbiogQHBhcmFtIHVybCBcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVSTCh1cmwpIHtcclxuICAgIHNlcnZlclVybCA9IHVybDtcclxuICAgIGluaXQoKTtcclxufTtcclxuXHJcbi8qKlxyXG4qIFxyXG4qIEBwYXJhbSBwYXRoIFxyXG4qIEBwYXJhbSBkYXRhIFxyXG4qIEBwYXJhbSBoYW5kbGVyIFxyXG4qIEBwYXJhbSBleHRyYVVybCBcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KHBhdGgsIGRhdGEsIGhhbmRsZXIsIGV4dHJhVXJsKTogWE1MSHR0cFJlcXVlc3Qge1xyXG4gICAgbGV0IHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLnRpbWVvdXQgPSA1MDAwO1xyXG5cclxuICAgIGlmIChkYXRhID09IG51bGwpIHtcclxuICAgICAgICBkYXRhID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBkYXRhLnRva2VuID0gdG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4dHJhVXJsID09IG51bGwpIHtcclxuICAgICAgICBleHRyYVVybCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICAvL+ino+aekOivt+axgui3r+eUseS7peWPiuagvOW8j+WMluivt+axguWPguaVsFxyXG4gICAgbGV0IHNlbmRwYXRoID0gcGF0aDtcclxuICAgIGxldCBzZW5kdGV4dCA9ICc/JztcclxuICAgIGZ1bmN0aW9uIHByYXNlRGF0YShkYXRhLCBzZW5kdGV4dCkge1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtrXS5fX3Byb3RvX18gIT09IG51bGwgfHwgZGF0YVtrXS5fX3Byb3RvX18gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcHJhc2VEYXRhKGRhdGFba10sIHNlbmR0ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VuZHRleHQgIT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgIHNlbmR0ZXh0ICs9IFwiJlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbmR0ZXh0ICs9IChrICsgXCI9XCIgKyBkYXRhW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbmR0ZXh0O1xyXG4gICAgfVxyXG4gICAgc2VuZHRleHQgPSBwcmFzZURhdGEoZGF0YSwgc2VuZHRleHQpO1xyXG5cclxuICAgIC8v57uE6KOF5a6M5pW055qEVVJMXHJcbiAgICBsZXQgcmVxdWVzdFVSTCA9IGV4dHJhVXJsICsgc2VuZHBhdGggKyBlbmNvZGVVUkkoc2VuZHRleHQpO1xyXG5cclxuICAgIC8v5Y+R6YCB6K+35rGCXHJcbiAgICBjb25zb2xlLmxvZyhcIlJlcXVlc3RVUkw6XCIgKyByZXF1ZXN0VVJMKTtcclxuICAgIC8vb3BlbiDliJ3lp4vljJbkuIDkuKror7fmsYJcclxuICAgIHhoci5vcGVuKFwiR0VUXCIsIHJlcXVlc3RVUkwsIHRydWUpO1xyXG5cclxuICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAvL+iuvue9riBIVFRQIOivt+axguWktOeahOWAvOOAguW/hemhu+WcqCBvcGVuKCkg5LmL5ZCO44CBc2VuZCgpIOS5i+WJjeiwg+eUqFxyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiByZXRyeUZ1bmMoKSB7XHJcbiAgICAgICAgc2VuZFJlcXVlc3QocGF0aCwgZGF0YSwgaGFuZGxlciwgZXh0cmFVcmwpO1xyXG4gICAgICAgIG91dFRpbWVzKys7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHhocltcImhhc1JldHJpZWRcIl0gPSB0cnVlO1xyXG4gICAgICAgIC8vYWJvcnQg5aaC5p6c6K+35rGC5bey6KKr5Y+R5Ye677yM5YiZ56uL5Yi75Lit5q2i6K+35rGCXHJcbiAgICAgICAgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2h0dHAgdGltZW91dCwgcmV0cnknKTtcclxuICAgICAgICBpZiAob3V0VGltZXMgPD0gb3V0VGltZXNNYXgpIHtcclxuICAgICAgICAgICAgcmV0cnlGdW5jKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXRyeSBzdG9wLCBmYWlscyEhIVwiKTtcclxuICAgICAgICAgICAgb3V0VGltZXMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDUwMDApO1xyXG5cclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZMgcmVhZHlTdGF0ZSDlsZ7mgKflj5HnlJ/lj5jljJbml7bvvIzosIPnlKjnmoTlpITnkIbnqIvluo9cIik7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICBsZXQgcmV0ID0gbnVsbDtcclxuICAgICAgICAvL+aIkOWKn+eahOWbnuW6lO+8jHN0YXR1c++8iDIwMOKAkyAyOTnvvIlcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaHR0cCByZXMoXCIgKyB4aHIucmVzcG9uc2VUZXh0Lmxlbmd0aCArIFwiKTpcIiArIHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJyZXF1ZXN0IGZyb20gW1wiICsgeGhyLnJlc3BvbnNlVVJMICsgXCJdIGRhdGEgW1wiLCByZXQsIFwiXVwiKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSBKU09OLnBhcnNlKHJlc3BUZXh0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnI6XCIgKyBlKTtcclxuICAgICAgICAgICAgICAgIHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJjb2RlOiAtMTAwMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJybXNnOiBlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcihyZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHhocltcImhhc1JldHJpZWRcIl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ290aGVyIHJlYWR5c3RhdGUgPT0gNCcgKyAnLCBzdGF0dXM6JyArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHJ5RnVuYygpO1xyXG4gICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvdGhlciByZWFkeXN0YXRlOicgKyB4aHIucmVhZHlTdGF0ZSArICcsIHN0YXR1czonICsgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8v5Y+R6YCB6K+35rGC44CC5aaC5p6c6K+35rGC5piv5byC5q2l55qE77yI6buY6K6k77yJ77yM6YKj5LmI6K+l5pa55rOV5bCG5Zyo6K+35rGC5Y+R6YCB5ZCO56uL5Y2z6L+U5ZueXHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy9zZXRUaW1lb3V0KHJldHJ5RnVuYywgMjAwKTtcclxuICAgICAgICByZXRyeUZ1bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geGhyO1xyXG59O1xyXG5cclxuIl19