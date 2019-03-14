var fs = require('fs')

// 判断服务器上面有没有 upload 目录，没有创建这个目录（图片上传）

fs.stat('upload', function(err, stats) {
    if(err) { // 没有这个目录
        fs.mkdir('upload', function(err) {
            if(err) {
                console.log(err)
                return false
            }
            console.log('upload 目录创建成功!')
        })
    } else {
        if(stats.isDirectory) {
            console.log('upload 目录存在！')
        }
    }
})

var filesArr = []
// 找出目录下面的所有的目录，然后打印出来
fs.readdir('./', function(err, files) {
    if(err) {
        console.log(err)
    } else {
        // console.log(files)
        // 循环判断是目录还是文件 ---异步，错误写法！！！
        // for(var i = 0; i < files.length; i++) {
        //     fs.stat(files[i], function(err, stats) {
                    // console.log(files[i])  ---undefine
        //     })
        // }

        /*
        匿名自执行函数
        即定义和调用合为一体。我们创建了一个匿名函数，并立即执行它，由于外部无法引用它内部的变量，
        因此在执行完后很快就会被释放。关键是这种机制不会污染全局对象！
        形式：
        (function () {code} ()) ---推荐使用这个
        (function () {code}) ()
        */
        (function getFile(i) {
            // 循环结束
            if(i == files.length) {
                console.log(filesArr)
                return false
            }
            fs.stat('./'+files[i], function(err, stats) {
                if(stats.isDirectory()) {
                    filesArr.push(files[i])
                }
                // 递归调用
                getFile(i+1)
            })
        })(0)
    }
})

