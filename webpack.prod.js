const path=require('path');
const Webpack=require('webpack');
const merge=require('webpack-merge');
const common=require('./webpack.common');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin');

module.exports=merge(common,{
    
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[hash].js'
    },
    mode:'production',
    
    module:{
        rules:[
            
            {
                test:/\.css$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    {
                     loader:'css-loader',
                     options:{
                         modules:false,
                     }
                    },
            
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:MiniCssExtractPlugin.loader},
                    {
                     loader:'css-loader',
                     options:{
                         modules:false,
                     }
                    },
                    {
                        loader:'sass-loader'
                    }
                ]

            }
        ]
    },
   
    optimization:{
        minimizer:[
            
            new MiniCssExtractPlugin({
                filename:'[name].[hash].css',
                
            }),
            
            new OptimizeCssAssetsPlugin({
                filename:'[name].[hash].css'
            })
            
        ]
    }
})