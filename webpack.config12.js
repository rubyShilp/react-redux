let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{
        'main': './scripts/main.tsx',
        'polyfill':'./scripts/polyfill.tsx'
    },
    context: path.join(process.cwd(), 'app'),
    output:{
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/',    
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    resolve:{
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'app')
        ],
        extensions: ['.ts','.tsx','.js']
    },
    module:{
        rules: [
            {
                test: /\.tsx$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|swf)$/,
                use: 'url-loader'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader:'css-loader'},{loader:'less-loader'}]
                })
            },
            {
                test: /\.css$/,
                include: path.resolve(process.cwd(), 'app', 'scripts'),
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                exclude: path.resolve(process.cwd(), 'app', 'scripts'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins:[
        new webpack.ProgressPlugin(),
       // new webpack.optimize.DedupePlugin(),//查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery':'jquery'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main','polyfill']
        }),
        new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        }),
        new ExtractTextPlugin('main.bundle.css'),
        new HtmlWebpackPlugin({ 
            template: './index.html',
            favicon: './favicon.ico'
        })
    ],
    devServer:{
        stats: 'minimal',
        inline: true,
        host:'192.168.66.13',
        proxy:[
            {
                context:['/'],
                target:'http://ci.fabigbig.com:8090',
                //target:'http://192.168.66.46:8081',
                changeOrigin:true,
                secure:false
            }
        ]
    }
}