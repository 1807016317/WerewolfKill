/**
*   title: Http
*	desc: Http 请求
*	auth: wangquanyou
*	date: 2020/06/17 
*/

let serverUrl = "http://127.0.0.1:9000";

let master_url = null;
let url = null;
let token = null;

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
export function sendRequest(path, data, handler, extraUrl) {
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
    for (let k in data) {
        if (sendtext != "?") {
            sendtext += "&";
        }
        sendtext += (k + "=" + data[k]);
    }

    //组装完整的URL
    let requestURL = extraUrl + sendpath + encodeURI(sendtext);

    //发送请求
    console.log("RequestURL:" + requestURL);
    xhr.open("GET", requestURL, true);

    if (cc.sys.isNative) {
        xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    }


    function retryFunc() {
        sendRequest(path, data, handler, extraUrl);
    };

    let timer = setTimeout(function () {
        xhr["hasRetried"] = true;
        xhr.abort();
        console.log('http timeout');
        retryFunc();
    }, 5000);

    xhr.onreadystatechange = function () {
        console.log("onreadystatechange");
        clearTimeout(timer);
        let ret = null;
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
        xhr.send();
    }
    catch (e) {
        //setTimeout(retryFunc, 200);
        retryFunc();
    }

    return xhr;
};

