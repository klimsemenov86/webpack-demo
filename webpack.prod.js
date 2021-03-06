const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production', // process.env.NODE_ENV is set to 'production'
    devtool: 'source-map',
});