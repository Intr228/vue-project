const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, argv) => {
    return {
        'entry': {
            'main': './sources/main.js',
            'vue': './sources/vue.js'
        },
        'output': {
            'path': path.resolve(__dirname, 'assets'),
            'filename': '[name].js',
            'library': {
                'type': 'umd'
            }
        },
        'module': {
            'rules': [
                {
                    'test': /\.vue$/,
                    'type': 'javascript/auto',
                    'use': 'vue-loader'
                }, {
                    'test': /\.css$/,
                    'type': 'javascript/auto',
                    'use': [
                        {
                            'loader': MiniCssExtractPlugin.loader
                        }, {
                            'loader': 'css-loader',
                            'options': {
                                'esModule': false
                            }
                        }
                    ]
                }, {
                    'test': /\.scss$/,
                    'type': 'javascript/auto',
                    'use': [
                        {
                            'loader': MiniCssExtractPlugin.loader
                        }, {
                            'loader': 'css-loader',
                            'options': {
                                'esModule': false
                            }
                        }, {
                            'loader': 'sass-loader',
                            'options': {
                                'sassOptions': {
                                    'outputStyle': argv.mode === 'production' ? 'compressed' : 'expanded'
                                }
                            }
                        }
                    ]
                }
            ]
        },
        'externals': {
            'document': 'document',
            'window': 'window'
        },
        'plugins': [
            new webpack.DefinePlugin({
                '__VUE_OPTIONS_API__': true,
                '__VUE_PROD_DEVTOOLS__': false
            }),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                'filename': 'style.css'
            })
        ]
    };
};