/**
*   title: Http
*	desc: Http 请求
*	auth: wangquanyou
*	date: 2020/06/17 
*/

let serverUrl = "https://www.oldwang.top:9001";

let master_url = null;
let url = null;
let token = null;
let outTimesMax = 20; //设置超时重试次数最大为20
let outTimes = 0;

init();

function init() {
    master_url = serverUrl;
    url = serverUrl;
};

/**
* 
* @param url 
*/
export function setURL(url) {
    serverUrl = url;
    init();
};

/**
* 
* @param path 
* @param data 
* @param handler 
* @param extraUrl 
*/
export function sendRequest(path, data, handler, extraUrl): XMLHttpRequest {
    let xhr = cc.loader.getXMLHttpRequest();
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
    let sendpath = path;
    let sendtext = '?';
    function praseData(data, sendtext) {
        for (let k in data) {
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
    let requestURL = extraUrl + sendpath + encodeURI(sendtext);

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
    };

    let timer = setTimeout(function () {
        xhr["hasRetried"] = true;
        //abort 如果请求已被发出，则立刻中止请求
        xhr.abort();
        console.log('http timeout, retry');
        if (outTimes <= outTimesMax) {
            retryFunc();
        } else {
            console.log("retry stop, fails!!!");
            outTimes = 0;
        }
    }, 5000);

    xhr.onreadystatechange = function () {
        console.log("当 readyState 属性发生变化时，调用的处理程序");
        clearTimeout(timer);
        let ret = null;
        //成功的回应，status（200– 299）
        if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
            // console.log("http res(" + xhr.responseText.length + "):" + xhr.responseText);
            cc.log("request from [" + xhr.responseURL + "] data [", ret, "]");
            let respText = xhr.responseText;

            try {
                ret = JSON.parse(respText);
            } catch (e) {
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
};

