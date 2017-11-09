const path = require('path');
const webpack = require('webpack');
const CrxPlugin = require("crx-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputExtensionFileName = "vuejs-chrome-extension";

module.exports = {
  entry: {
    popup: "./extension-src/popup",
  },
  output: {
    path: path.resolve(__dirname, './extension-src/dist'),
    filename: "[name].js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: './extension-src/index.html',
    filename: './popup.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: './assets/[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CrxPlugin({
      keyFile: "./extension-src.pem", // it is your pem file. (contains the certificate and the private key.)
      contentPath: "./extension-src",
      outputPath: "./output",
      name: outputExtensionFileName,
    })
  ])
}
