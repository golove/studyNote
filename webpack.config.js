const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin'); //提取css为单独文件的插件

module.exports = {
    // 单入口,使用字符串指定一个入口文件,打包一个chunk,输出一个bundle,chunk的名称是默认的
    // entry: './src/index.js',

    // Array多入口文件,所有的入口文件形成一个chunk,输出一个bundle,
    // entry: ['./src/index.js', './src/main.js'],

    // Object 多入口,有几个入口文件就会生成几个chunk,并输出几个bundle,chunk的名称是key,
    entry: {
        one: './src/index.js',
        two: './src/main.js'
    },
    // 特殊有用法
    // entry: {
    //     one: ['', ''],
    //     two: ""
    // },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'build')
    },
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
        // 提取css为独立文件
        new miniCssExtractPlugin()
    ],
    mode: 'production',  // development
}