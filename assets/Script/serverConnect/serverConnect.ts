// 客户端连接服务器

// export default class serverConnect {
//     request(obj){
//         let httpRequest = new XMLHttpRequest(); //  创建服务对象
//         let time = 5 * 1000;    //  
//         let timeout = false;    //  是否超时
 
//         //超时
//         let timer = setTimeout(() => {
//             timeout = true;
//             httpRequest.abort();
//         }, time);
 
//         let url = obj.url;
 
//         //请求参数
//         if(typeof obj.data === 'object') {
//             let kvs = [];
//             for(let k in obj.data) {
//                 kvs.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj.data[k]));
//             }
//             url += '?';
//             url += kvs.join('&');
//         }
 
//         httpRequest.open(obj.method ? obj.method : 'GET', url ,true);
 
//         httpRequest.onreadystatechange = () => {
//             let response = httpRequest.responseText;
//             clearTimeout(timer);
 
//             if(httpRequest.readyState === 4) {
//                 if(typeof obj.success === 'function') {
//                     let resJson = JSON.parse(response);
//                     obj.success(resJson);
//                 }
//             }else {
//                 if(typeof obj.fail === 'function') {
//                     obj.fail(response);
//                 }
//             }
//         };
 
//         httpRequest.send();
//     }
// }

let ws = new WebSocket("ws://echo.websocket.org");
ws.onopen = function (event) {
    console.log("Send Text WS was opened.");
};
ws.onmessage = function (event) {
    console.log("response text msg: " + event.data);
};
ws.onerror = function (event) {
    console.log("Send Text fired an error");
};
ws.onclose = function (event) {
    console.log("WebSocket instance closed.");
};

setTimeout(function () {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send("Hello WebSocket, I'm a text message.");
    }
    else {
        console.log("WebSocket instance wasn't ready...");
    }
}, 3);