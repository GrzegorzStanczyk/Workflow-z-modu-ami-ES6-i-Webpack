const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry:[
        './src/index.js'
    ],
    output:{
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.tpl.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    module:{
        preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders:[
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'html' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")}
        ]
    }
}
