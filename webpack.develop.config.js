const path = require('path');
const webpack = require('webpack');

module.exports = {
    target:"web",
    entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/web/js/index.js'
    ],
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'app','web','js'),
        publicPath:'/assets/'
    },

    devtool: "cheap-eval-source-map",

    module: {
        rules: [
            {
                test:/\.jsx?$/, 
                exclude: /node_modules/, 
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devServer:{
        hot: true,
        contentBase: path.resolve(__dirname,'app','public'),
        compress: true,
        port:8080,
        publicPath:"/assets/",
        watchContentBase:true,
        historyApiFallback: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin()
    ]
};