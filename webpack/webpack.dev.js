const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig =  require("./weback.config");

module.exports = merge( commonConfig, {
    mode: "development",
    performance: {
        hints: false,
        maxAssetSize: 244 * 1024, // Set your desired size limit in bytes
    },
    plugins: [
        new HtmlWebpackPlugin({
          favicon: false,
          template: path.resolve(__dirname, "..", "public/index.html")
        })
    ]
});