const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: { // локальный сервер с live reload
        contentBase: './dist',
        writeToDisk: true, // чтобы CleanWebpackPlugin не очищал dist (но надо помнить, что такая настройка снижает скорость билда)
    },
});