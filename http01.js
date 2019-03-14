var http = require('http') // 引入 http 模块
var url = require('url') // 引入 url 模块

http.createServer(function(req, res) { // 创建服务器，通过 request, response 参数来接收和响应数据
    if(req.url != '/favicon.ico') {
        console.log('服务器收到了请求:'+req.url) // /news?age=12&name=yao
        console.log(url.parse(req.url, true))
        var result = url.parse(req.url, true).query
        console.log(result)
        console.log(result.name)
        // console.log('get请求的数据='+url.parse(req.url, true))
    }
    // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf-8
    res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'})
    // 发送响应数据
    res.end('恭喜百洛普李杰荣登福布斯排行榜第一位！')
}).listen(8888) // 使用 listen 方法绑定端口
// 终端打印信息
console.log('Server running at http://localhost:8888')