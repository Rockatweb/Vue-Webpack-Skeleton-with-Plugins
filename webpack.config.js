// include required modules
const path = require('path'); // plugin for working with paths and directories
const webpack = require('webpack'); // just webpack :^)
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // extract text from bundles
const CleanWebpackPlugin = require('clean-webpack-plugin'); // plugin for cleaning folders
const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin for creating html with webpack
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // minify javascript
const FaviconsWebpackPlugin = require('favicons-webpack-plugin'); // favicon plugin

const weblog = require('webpack-log'); // logging module for webpack
const log = weblog({ name: 'wds' }); // webpack-dev-server


/* get current environment */
const ENV = process.env.NODE_ENV;

/* include conf by environment */
const conf = require('./config/' + ENV + '.conf.js');
const env_conf = conf.module;


/* Main Settings config */
module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: [
        './index.js' // which is your entry file for Vue
    ],
    output: {
        // publicPath: '/',
        filename: '[name].[hash].js', // output .js - files with a hash
        sourceMapFilename: '[name].[hash].js.map', // output .js - sourcemaps
        path: path.resolve(__dirname, './public/build') // output folder
    },
    module: {
        rules: [
            {
                // support for .vue files in the project
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                // loader for static files
                test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: "url-loader",
                options: {
                    limit:10000,
                    publicPath: env_conf.paths.img
                }
            },
            {
                // loader for less - css
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!less-loader'
                })
            },
            {
                // loader for ecma 6+ scripts
                include: path.resolve("src"),
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [
        /*
            set build settings
            https://webpack.js.org/plugins/define-plugin/
        */
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: env_conf.node_env,
                    API_URL: env_conf.paths.api,
                    BASE_URL: env_conf.paths.base_url,
                    GOOGLE_API_KEY: env_conf.google_api_key
                }
            }
        }),

        /*
            configuration for css output
            https://github.com/webpack-contrib/extract-text-webpack-plugin
         */
        new ExtractTextPlugin({
            filename: "[name].[contenthash].css",
            disable: process.env.NODE_ENV === "dev"
        }),

        /*
            clean the public folder before
            https://github.com/johnagan/clean-webpack-plugin
         */
        new CleanWebpackPlugin(['public/build/*.*']),

        /*
            plugin for .html creation
            https://github.com/jantimon/html-webpack-plugin
        */
        new HtmlWebpackPlugin({
            template: '../index.html',
            metadata: {
                baseUrl: env_conf.paths.base
            }
        }),

        /*
            if you don't need jQuery, than you can remove it from here
        */
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        /*
            a Plugin for the Favicon
            https://github.com/jantimon/favicons-webpack-plugin
        */
        new FaviconsWebpackPlugin({
            logo: './assets/images/logo.png', // Path to Favicon
            inject: true, // inject it to the html file
            emitStats: false,
            persistentCache: true,
            icons: {
                android: false, // create android favicon
                appleIcon: false, // create apple favicon
                appleStartup: false, // create apple favicon
                coast: false,
                favicons: true, // create favicon
                firefox: false, // create firefox mobile favicon
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        })
    ],

    /*
        configuration for the local dev server
        https://webpack.js.org/configuration/dev-server/
    */
    devServer: {
        contentBase: false,
        historyApiFallback: true,
        stats: 'minimal',
        compress: false,
        inline: true,
        hot: true
    },

    /*
        which notifications should webpack put in the console
        https://webpack.js.org/configuration/performance/
    */
    performance: {
        hints: false
    },

    /*
        define how the source-maps will be created
        https://webpack.js.org/configuration/devtool/#devtool
    */
    devtool: 'source-map'
};


/*
    enable the Uglify-JS plugin when not in dev build
*/
if (ENV !== 'dev') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        /*
            should the javascript files be minified (i recommend to put that on production only)
            https://github.com/webpack-contrib/uglifyjs-webpack-plugin
        */
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma:8,
                compress: {
                    warnings: true
                },
                output: {
                    comments: false,
                    beautify: false,
                }
            }
        })
    ])
}