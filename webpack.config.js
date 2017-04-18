var path = require('path');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var webpack = require('webpack');

var plugins = [
  new CleanPlugin('dist'),
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html'),
    filename: 'index.html'
  }),
  new ngAnnotatePlugin({
    add: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js'
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
];

if (process.env.PROD) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      compress: {
        warnings: false,
        dead_code: true,
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    })
  );
}

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/app.js'),
    vendor: getVendors()
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        })
      },
      {
        test: /\.(jpg|git|png)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
      },
      {
        test:  /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=8192&minetype=application/font-woff2&name=fonts/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: plugins,
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    port: 9000
  },
};

function getVendors() {
 return [
   'angular',
   'angular-sweetalert',
   'angular-toastr',
   'angular-translate',
   'angular-ui-bootstrap',
   'angular-ui-router',
   'babel-polyfill',
   'lodash',
   'ng-infinite-scroll',
   'sweetalert',
 ];
}
