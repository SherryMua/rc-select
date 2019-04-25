const path = require('path')

module.exports = {
    entry: {
        index: path.join(__dirname, 'example/demo.tsx')
        // index: './src/index.tsx'
    },
    output: {
        filename: 'bundle.js',
        publicPath: __dirname + "/dist/", // js引用路径或者CDN地址
        path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        port: 3001
    }
}