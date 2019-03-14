var mimeModel = require('./model/getMimeFromFile.js')
var fs = require('fs')
var http = require('http')
var url = require('url')
var path = require('path')

http.createServer(function(req, res) {
    // 获取 pathname
    var pathName = url.parse(req.url).pathname
    if(pathName == '/') {
        pathName = '/index.html' // 设置默认 pathname => /index.html
    }
    var extName = path.extname(pathName) // 获取 path 后缀名

    console.log('pathName='+pathName)
    console.log('extName='+extName)
    // res.writeHead(404, {"Content-Type":"text/html;charset='utf-8'"})
    // res.write('haha')
    // res.end() // 结束响应

    if(pathName != '/favicon.ico') { // 过滤掉 favicon.ico 请求
        // 文件操作获取 static 下的文件
        fs.readFile('static/'+pathName, function(err, data) {
            if(err) { // 没有该文件
                console.log('没有该文件')

                fs.readFile('./static/404.html', function(err, data404) {
                    if(err) {
                        console.log(err)
                    }
                    res.writeHead(404, {"Content-Type":"text/html;charset='utf-8'"})
                    res.write(data404)
                    res.end() // 结束响应
                })
            } else { // 返回该文件
                console.log('返回该文件')
                var mime = mimeModel.getMime(fs, extName)
                res.writeHead(200, {"Content-Type":''+mime+";charset='utf-8'"})
                res.write(data)
                res.end() // 结束响应
            }
        })
    }
}).listen(8880)