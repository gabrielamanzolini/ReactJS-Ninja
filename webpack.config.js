'use strict'

const path = require('path');
module.exports = {
    entry: path.join(_dirname, 'src', 'index'),
    output: {
        path: path.join(_dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    }
}