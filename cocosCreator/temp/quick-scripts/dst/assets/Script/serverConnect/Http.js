
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