exports.getMime = function(fs, extname) {
    fs.readFile('./mime.json', function(err, data) {
        if(err) {
            console.log('mime.json 文件不存在!')
            return false
        }
        var mimes = JSON.parse(data.toString());
        return mimes[extname] || 'text.html'
    })
}