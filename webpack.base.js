const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ["@babel/env", "@babel/react"],
                    plugins: ["@babel/plugin-proposal-class-properties",
                            "syntax-dynamic-import"]
                }
                
            },
        ]
    },
}