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

### webpack的配置 **webpack.config.js**

 #### "html-webpack-plugin"
 npm i tml-webpack-plugin -D
```js
 const htmlWebpackPlugin = require('html-webpack-plugin');
 plugins: [
        // 默认会创建一个空的,目的就是自动引入打包资源(js/css)
        new htmlWebpackPlugin({
            template: "./src/index.html",    //指定html模板文件
            filename: 'demo.html',           //指定html文件名称
            minify: {
                //移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
    ```
 #### "style-loader" "css-loader" "less-loader"
 ```js

 module: {
    rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }，
            {
                 test: /\.less$/,
                 use: ['style-loader', 'css-loader', 'less-loader'],
            }
        ]
    }


 #### 打包成单独的css文件 "mini-css-extract-plugin" 
 npm i mini-css-extract-plugin -D
```js
const miniCssExtractPlugin = require('mini-css-extract-plugin'); //提取css为单独文件的插件

 module: {
    rules: [
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader'],
            }，
            {
                 test: /\.less$/,
               use: [miniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            }
        ]
    }

plugins: [new miniCssExtractPlugin()]
```

 #### 处理css兼容性 "postcss-loader" "postcss-preset-env"  
 npm i postcss-loader postcss-preset-env -D
[postcss.config.js](postcss.config.js)
```js
    module: {
        rules: [

            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],   //提取css为单独文件
            },
            {
                test: /\.less$/,
                // use: ['style-loader', 'css-loader', 'less-loader'],
                use: [miniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'],//提取css为单独文件
            }
        ]
    },

```
 #### 压缩css “optimize-css-assets-webpack-plugin"
 npm i optimize-css-assets-webpack-plugin -D
```js
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
plugins: [ new optimizeCssAssetsWebpackPlugin()]
```


#### 打包图片资源
npm i url-loader file-loader -D

module:{
    rules:[
         {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    publicPath: './images/',
                    outputPath: 'images/',//输出目录
                    limit: 1024 * 8,
                    name: '[name][hash:5].[ext]' // 设置图片名

                }
            },
    ]
}


打包html里的图片资源
 npm i html-loader -D
module:{
    rules:[
           // 解析html里的图片
            {
                test:/\.html$/,
                loader:'html-loader',
            }
    ]
}