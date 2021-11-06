var HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require('./webpack.common');
const { merge }  = require("webpack-merge");
const path=require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,{
    mode:"development",
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    }, 
    plugins:[new HtmlWebpackPlugin({
        template:"./src/template.html"
    })],
    module:
    {
        rules:[
            {
                test: /\.scss$/,
                use:[
                    "style-loader", //3. js(css) to dom
                    "css-loader", //2. css to js
                    "sass-loader" //1.sass to css
                ]
            },
        ]
    }
});