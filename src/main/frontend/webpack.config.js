let path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin =  require('extract-text-webpack-plugin');
module.exports = (env) => {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';    
    if(process.env.NODE_ENV === 'test'){
        require('dotenv').config({path:'.env.test'});
    }else if(process.env.NODE_ENV === 'development'){        
        require('dotenv').config({path:'.env.development'});        
    }
    const isProduction = env === 'production';
    const CSSExtract=new ExtractTextPlugin('styles.css');
    return {
        entry:["babel-polyfill","./src/app.js"],
        output:{
            path:path.join(__dirname,'public','dist'),            
            filename:'sample.js',
            publicPath: '/'
        },
        module:{
            rules:[{
                loader:"babel-loader",
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
                test:/\.s?css$/,
                use:CSSExtract.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {                        
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })

            }
        ]
        },
        plugins: [
            CSSExtract
        ],
        devtool:isProduction ? "source-map" : "cheap-module-source-map", // This is for source look up in dev tools
        devServer:{
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            historyApiFallback:true,
            port: 8085,            
            publicPath: '/dist/',
            proxy: {
                '/api': {
                  target: 'http://localhost:8080/',
                  secure: false,
                },
              },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
              }
        }
    };
}