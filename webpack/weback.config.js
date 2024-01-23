const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "..", "src", "index.tsx"),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "..", "dist")
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".svg", ".jpg", "pdf"],
      alias: {
        '@src': path.resolve(__dirname, "..", 'src'),
        '@assets': path.resolve(__dirname, "..", 'src/assets'),
        '@mui/styled-engine': '@mui/styled-engine-sc'
      },
  
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, "..", "dist"),
        },
        port: 4000,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            // exclude: /node_modules/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.(ts|js)x?$/,
            include: path.resolve(__dirname, "..", "src"),
            exclude: path.resolve(__dirname, "..", "node_modules"),
            use: "babel-loader"
          },
          {
            test: /\.(png|jpg|gif|pdf)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images'
            }
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          }
        ],
    },
    // performance: {
    //     hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    //     maxAssetSize: 244 * 1024, // Set your desired size limit in bytes
    // },
    optimization: {
        usedExports: true,
        splitChunks: {
          chunks: "all",
        },
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new CompressionPlugin(),
    ]
}