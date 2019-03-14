exports.getMime = function(extname) { // mime type-请求文档类型
    switch(extname) {
        case '.html':
            return 'text/html'
        case '.css': 
            return 'text/css'
        case '.js':
            return 'text/javascript'
        default:
            return 'text/html'        
    }
}