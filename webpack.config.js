const path=require('path');
let webpack=require('webpack');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin')
const dev=process.env.NODE_ENV==='dev';
const pro=process.env.NODE_ENV==='pro';


const plugins=[
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
        title:'doc',
        template:'./app/index.html',
        filename:'./index.html'
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
    }),
    new  webpack.optimize.CommonsChunkPlugin({
        name:'vendor'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.[hash].css',{
        disable:false,
        allChunks:true
    })
]

let devTool=''

if(dev){
    devTool='#source-map';


}

if(pro){
    plugins.push(new UglifyJSPlugin())
}


module.exports={
    entry:'./app/index.js',

    // devtool:devTool,
    devServer:{
        // contentBase:'./dist',  // src 引入 bower 中js 无法加载
        // hot:true
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },

    module:{
        rules: [
            {
                test:/\.html$/,
                use:[
                    'html-withimg-loader'
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test:/\.css$/,
                exclude: '/node_modules/',
                use: ExtractTextPlugin.extract({
                    fallback:[{   // 不写会报错 window is not defind
                        loader:'style-loader'
                    }],
                    use:[{
                        loader:'css-loader?sourceMap',
                    },{
                        loader:'autoprefixer-loader'
                    }
                    ]
                })
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:[{
                        loader:'style-loader'
                    }],
                    use:[{
                        loader:'css-loader?sourceMap!less-loader?sourceMap!autoprefixer-loader'
                    }
                    ]
                })
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                use: [
                    "url-loader?prefix=font/&limit=5000"
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    "url-loader?limit=10000&mimetype=application/octet-stream"
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    "url-loader?limit=10000&mimetype=image/svg+xml"
                ]
            }

        ]
    },
    resolve:{
        extensions:['.js','.json','.html','.css','.less']
    },
    plugins:plugins
}