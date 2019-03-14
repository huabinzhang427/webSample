var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')
var mimeModel = require('./model/getMime.js')

http.createServer(function(req, res) {
    //xxx.json?214214124  req.url => xxx.json?214214124
    var pathName = url.parse(req.url).pathname  // xxx.json
    console.log('pathName='+pathName)
    if(pathName == '/') {
        pathName = '/index.html' // 设置默认加载首页
    }

    // 获取文件的后缀名
    var extName = path.extname(pathName)
    console.log('extName='+extName)
    if(pathName != '/favicon.ico') { // 过滤掉请求 favicon.ico
        // 文件操作获取 static 下面的 index.html 
        fs.readFile('./static/'+pathName, function(err, data) {
            if(err) { // 没有这个文件
                fs.readFile('./static/404.html', function(err, data404) {
                    if(err) {
                        console.log(err)
                    }
                    res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'})
                    res.write(data404)
                    res.end() // 结束响应
                })
            } else { // 返回这个文件
                var mime = mimeModel.getMime(extName)
                res.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'})
                res.write(data)
                res.end() // 结束响应
            }
        })
    }
}).listen(8889)
