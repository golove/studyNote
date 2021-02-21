# vue3.x sutdyNote


### **npm**
1.Npm 全称Node Package Manager , node 包管理器
是node.js默认的,以JavaScript编写的软件包管理系统

2.**设置为淘宝镜像地址**
```npm config set registry https://registry.npm.taobao.org --global```
```npm config set disturl https://npm.taobao.org/dist --global```

3.**设置当前地址（设置为默认地址）**
```npm config set registry https://registry.npmjs.ort/```

4.**查看镜像的配置地址**
```npm config get registry```
```npm config get disturl```

5.**使用nrm工具切换淘宝源**
```npx nrm use taobao```
**切换官方源**
```npx nrm use npm```

### **webpack的配置**
```js
const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 单入口,使用字符串指定一个入口文件,打包一个chunk,输出一个bundle,chunk的名称是默认的
    // entry: './src/index.js',
    // Array多入口文件,所有的入口文件形成一个chunk,输出一个bundle,
    // entry: ['./src/index.js', './src/main.js'],
    // Object 多入口,有几个入口文件就会生成几个chunk,并输出几个bundle,chunk的名称是key,
    entry: {
        one: './src/index.js',
        two: './src/main.js'
    },
    // 特殊有用法
    // entry: {
    //     one: ['', ''],
    //     two: ""
    // },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: []
    },
    plugins: [
        // 默认会创建一个空的,目的就是自动引入打包资源(js/css)
        new htmlWebpackPlugin({
            template: "./src/index.html",    //指定html模板文件
            filename: 'demo.html',           //指定html文件名称
            minify: {
                //移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
    ],
    mode: 'production',  // development
}
```
