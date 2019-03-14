exports.getMime = function(fs, extname) { // 通过后缀名获取文档类型 mime type的方法
    // 把读取数据改成同步方法
    var data = fs.readFileSync('./mime.json')
    // data.toString() 转换为 json 字符串
    // 把 json 字符串转换为 json 对象
    var mimes = JSON.parse(data.toString())
    return mimes[extname] || 'text/html'
}