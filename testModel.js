var tools = require('tools') 
// tools 默认目录下没有，会在 node_modules 里面找这个模块，
// 如果想实现核心模块一样直接引入自定义模块，
// 我们可以通过 `npm init --yes` 在自定义模块目录下生成一个 `package.json`，里面有入口文件设置直接指向我们定义的模块

// tools.sayHello()
console.log(tools.sayHello())
