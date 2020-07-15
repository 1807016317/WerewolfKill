// node.js 搭建服务器

const ws = require("nodejs-websocket");

const PORT = 9804; //端口号
const HOST = 'localhost';   // 本地域名：127.0.0.1

let server = ws.createServer(function (socket) {
    console.log('服务端：收到来自客户端的请求');

    // 'text/plain'纯文本
    //socket.setHeader('Content-Type', 'text/plain; charset=utf-8');

    socket.on('data', function (data) {
        console.log('服务端：收到客户端数据，内容为{' + data + '}');

        // 给客户端返回数据
        socket.end('你好，我是服务端');
    });

    //socket.on('close', function(){
    //console.log('服务端：客户端连接断开');
    //});
});

server.listen(PORT, HOST, function () {
    console.log('服务端：开始监听来自客户端的请求');
});