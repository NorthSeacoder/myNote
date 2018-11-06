const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    //入口
    entry: './src/js/index.js',
    //输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            //loader
            {
                test: /\.jsx?/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                use: 'babel-loader',
            },
            {
                test: /\.css/,
                include: [path.resolve(__dirname, 'src/css')],
                use: ['style-loader', 'css-loader']
            }
            // {
            //     test: /\.css$/,
            //     include: [
            //         path.join(__dirname, 'src/css')
            //     ],
            //     // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: 'css-loader'
            //     })
            // }
        ],
    },

    // 代码模块路径解析的配置
    resolve: {
        // alias: {
        //     '@': path.join(__dirname, './src'),
        // },
        modules: [
            "node_modules",
            path.resolve(__dirname, 'src')
        ],

        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
    },

    plugins: [
        // 使用 uglifyjs-webpack-plugin 来压缩 JS 代码
        new UglifyPlugin(),
        //自动向html插入js文件
        new HtmlWebpackPlugin({
            filename: 'index.html', // 配置输出文件名和路径
            template: './src/views/index.html' // 配置文件模板
        }),
        // 引入插件，配置文件名，这里同样可以使用 [hash]
        new ExtractTextPlugin('index.css')

    ],
}