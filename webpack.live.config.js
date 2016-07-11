var path = require('path');
var webpack = require('webpack');
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

/**
 * 标识开发环境和生产环境
 * @type {webpack.DefinePlugin}
 */
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});
function rewriteUrl(replacePath) {
  return function (req, opt) {
    var queryIndex = req.url.indexOf('?');
    var query = queryIndex >= 0 ? req.url.substr(queryIndex) : "";

    req.url = req.path.replace(opt.path, replacePath) + query;
    console.log("rewriting ", req.originalUrl, req.url);
  };
}
module.exports = {
/*    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      contentBase: './build',
      port: 8080,
      stats: { colors: true },
      proxy: [
          {
            path: /^\/shanghaicity\/(.*)/,
            target: "http://localhost:8080/",
            rewrite: rewriteUrl('/$1\.json'),
            changeOrigin: true
          }
      ]
    },*/
    entry: {
      index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/live.js')
      ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
      extension: ['', '.jsx', '.js', '.json'],
      // 提高webpack搜索的速度
      alias: { }
    },
    devtool: 'source-map',
    'display-error-details': true,
    // 使用externals可以将react分离，然后用<script>单独将react引入
    externals: [],
    module: {
      // 使用module.noParse针对单独的react.min.js这类没有依赖的模块，速度会更快
      noParse: [

      ],
      loaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },
        {
          test: /\.css/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
          test: /\.less/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192&name=app/images/[name].[ext]'
        },
        {
          test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000"
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      definePlugin,
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
      new HtmlWebpackPlugin({
        title: 'your app title',
        template: './demo/live.html'
      }),
      new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
      new ExtractTextPlugin("main.css", {
          allChunks: true,
          disable: false
      }),
    ]
};
