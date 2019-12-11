
const Webpack=require('webpack')
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')


module.exports={
    entry:'./src/index.js',

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }]
            },
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }]
            },
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                test:/\.(png|jpg|jpeg)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name:'[name].[hash].[ext]',
                        outputPath:'img',
                        publicPath:'./img'
                    }
                    
                }]
            },
            
        ]
    },
    plugins:[
        new CleanWebpackPlugin({
            verbose:true
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new Webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            HOC:'./src/js/HOC/HOC.js',
            React:'react'
        })
        
        
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                uglifyOptions:{
                    mangle:true,
                    cache:false
                }
            })
            
        ]
    }
}