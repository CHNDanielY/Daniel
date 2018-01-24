const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        // path: __dirname + "/public", //打包后的文件存放的地方
        path: __dirname + "/build", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devtool: "none",
    devServer: {
        contentBase: "./build", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react", "es2015"]
                    }
                },
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, //指定使用css modules
                            localIdentName: "[name]__[local]--[hash:base64:5]" //指定css的类名格式
                        }
                    }
                ]
            },{
                test: /\.html$/,
                use: "raw-loader"
            }
            
            
        ]
    },
    plugins: [
        new webpack.BannerPlugin("版权所有，翻版必究"),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html",
            title: "首页",
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};


