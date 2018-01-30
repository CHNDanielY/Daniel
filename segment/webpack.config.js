const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin=require('clean-webpack-plugin')

module.exports = {
    devtool: "eval-source-map",
    // entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    entry: path.resolve(__dirname, "./app/main.js"), //已多次提及的唯一入口文件
    // 配置路径用path.resolve()处理，是为了确保路径是从根目录开始绝对定位到指定位置，webpack3.0要求我们在配置路径相关的时候使用绝对路径；
    output: {
        // path: __dirname + "/public", //打包后的文件存放的地方
        // path: __dirname + "/build", //打包后的文件存放的地方
        path: path.resolve(__dirname, "./build"), //webpack3打包后的文件存放的地方
        // filename: "bundle.js" //打包后输出文件的文件名
        filename: "js/bundle-[hash].js" //打包后输出文件的文件名[hash]为编译时填写hash的占位符，也可以填写chunkhash等
    },
    devServer: {
        contentBase: "./build", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
        // hot:true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: [
                    {
                        loader: "babel-loader"
                        // cacheDirectory: true //充分理由缓存提升babel的速度
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // importLoaders: 1,
                            // importLoaders解决由于css-loader处理文件导入的方式导致postcss-loader不能正常使用的问题
                            modules: true, //指定使用css modules
                            localIdentName: "[name]__[local]--[hash:base64:5]" //指定css的类名格式
                        }
                    }
                    // { loader: "postcss-loader" },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                // loader:"style-loader!css-loader!sass-loader"
                // loader:['style-loader','css-loader','sass-loader']
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                    // {
                    //     loader: "style-loader!css-loader!sass-loader"
                    // }
                ]
            },
            {
                test: /\.html$/,
                use: "raw-loader"
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("版权所有，翻版必究"),
        new cleanWebpackPlugin(["build/*.*"], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html",
            title: "首页",
            filename: "index.html"
        })
    ]
};


