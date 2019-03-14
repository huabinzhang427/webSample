var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {

    var pathName = req.url

    if(pathName == '/') {
        pathName = '/index.html' // 默认加载的页面
    }

    if(pathName != '/favicon.ico') { // 过滤掉 /favicon.ico
        console.log(pathName)

        // 文件操作读取 static 下面的 index.html
        fs.readFile('./static/'+pathName, function(err, data) {
            if(err) { // 没有这个文件
                console.log('404')
                res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'})
                res.end() // 响应结束
            } else {
                res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
                res.write(data) // 返回这个文件
                res.end() // 响应结束
            }
        })
    }    
}).listen('8888')
console.log('建立连接中～')