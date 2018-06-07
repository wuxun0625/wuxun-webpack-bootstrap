var webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: __dirname + "/src/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/web",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: [
          'raw-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
    contentBase: "./web",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}