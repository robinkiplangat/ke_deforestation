const path=require('path')
const Webpack=require('webpack')
const merge=require('webpack-merge')
const common=require('./webpack.common')


module.exports=merge(common,{
    
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode:'development',
    devServer:{
        hot:true
    },
    module:{
        rules:[
            
            {
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {
                     loader:'css-loader',
                     options:{
                         modules:false
                     }
                    
                    },
            
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:'style-loader'},
                    {
                     loader:'css-loader',
                     
                    },
                    {
                        loader:'sass-loader'
                    }
                ]

            }
        ]
    },
    plugins:[
        
        new Webpack.HotModuleReplacementPlugin()
        
    ]
});