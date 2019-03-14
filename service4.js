var mimeModel = require('./model/getMimeFromFileErr.js')
var fs = require('fs')

console.log(mimeModel.getMime(fs, '.css')) // undefined，异步执行
