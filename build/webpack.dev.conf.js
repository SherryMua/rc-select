const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        port: 3001,
        hot: true,
        overlay: true,
        // historyApiFallback: {
        //     // HTML5 history模式
        //     rewrites: [{ from: /.*/, to: "/demo.html" }]
        // },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
}