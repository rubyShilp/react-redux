let webpackMerge = require('webpack-merge');
let path = require('path');
let fs=require('fs');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let commonConfig=require('./webpack.common');
module.exports=webpackMerge(commonConfig,{
    //devtool:'source-map',
    output:{
        path: path.join(process.cwd(), 'dist'),
        publicPath: 'http://127.0.0.1:8083/',    
        filename: '[name].bundle.js',
        chunkFilename: '[main].chunk.js'
    },
    devServer:{
        host:'127.0.0.1',
        stats: 'minimal',
        proxy:[
            {
                context:['/'],
                target:'http://172.18.2.241:62418/',
                changeOrigin:true,
                secure:false,
                bypass:function(req, res, proxyOptions){
                    if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                      }
                }
            },
        ]
    }
})
