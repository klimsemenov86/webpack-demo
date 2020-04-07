const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: { // local server with live reload
        contentBase: './dist',
        writeToDisk: true, // CleanWebpackPlugin will not clear dist folder (this reduces build speed)
    },
});