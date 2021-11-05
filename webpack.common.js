var HtmlWebpackPlugin = require("html-webpack-plugin");
const path=require("path");

module.exports = {
    entry:"./src/index.js",
    plugins:[new HtmlWebpackPlugin({
        template:"./src/template.html"
    })],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    "style-loader", // js(css) to dom
                    "css-loader", //2. css to js
                    "sass-loader" //1.sass to css
                ]
            },
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use: [{
                    loader:"file-loader",
                    options: {
                        esModule: false,
                        name:"[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }],
                type: 'javascript/auto' 
            }
        ]
    }
};