const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const developmentConf = require('./webpack.dev.conf')
const productionConf = require('./webpack.prod.conf')

module.exports = env => {
    const config = env === "production" ? productionConf : developmentConf
    return merge({
        entry: {
            demo: path.join(__dirname, '../example/demo.tsx')
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: "[name]-[hash:5].bundle.js",
            chunkFilename: "[name]-[hash:5].chunk.js"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.less?$/,
                    use: ['style-loader', 'css-loader', 'less-loader'],
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'demo.html',
                template: path.resolve(__dirname, '../example/demo.html')
            })
        ]
    }, config)
}