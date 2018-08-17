const webpack = require('webpack');

module.exports = {
    entry: './src/app/app.tsx',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
        path: __dirname + '/public',
        filename: 'build/app.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
    },
};
