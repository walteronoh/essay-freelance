const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMininizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.vue$/,
            loader: "vue-loader"
        },
        {
            test: /\.css/,
            use: [devMode ? "vue-style-loader" : MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.(png|jpe?g|webm|gif|svg)/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: "assets",
                    esModule: false
                }
            }]
        }
        ],
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    optimization: {
        minimizer: [`...`, new CssMininizerWebpackPlugin()]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    devtool: devMode ? "eval-source-map" : "hidden-nosources-source-map",
    mode: devMode ? "development" : "production"
};