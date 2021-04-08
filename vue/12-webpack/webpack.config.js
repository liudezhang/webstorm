// webpack 配置文件
const path = require('path');

const webpack = require('webpack')

// 打包html
let HtmlWebpackPlugin = require('html-webpack-plugin')

// 使用vue必须要的
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// js压缩插件
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

// 配置打包路径
module.exports = {
  // 设置打包模式
  // development 开发环境  未压缩
  // production  生产环境  压缩后的
  mode: 'development',
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      // 配置vue文件
      {
        test: /\.vue$/i,
        use: ["vue-loader"],
      },
      // css文件配置
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到dom中
        // 使用多个loader是从右向左读
        use: ['style-loader', 'css-loader'],
      },
      // less文件配置
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader",]
      },
      //  图片配置
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
            // 当加载的图片大于limit时，需要file-loader模块进行加载
            // limit 配置图片大小
            limit: 15000,
            name: 'img/[name].[hash:4].[ext]'
          },
        }]
      },
      // 语法转换
      {
        test: /\.js$/i,
        // 排除node模块包里面的js
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  resolve: {
    // extensions:['.vue'],
    // alias 别名
    alias: {
      veu$: 'vue/dist/vue.esm.js'
    }
  },
  // plugins 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // 使用vue必须要
    new VueLoaderPlugin(),
    // 给打包后的文件添加横幅
    new webpack.BannerPlugin('最终解释权归刘德樟所有'),
    // 压缩js插件配置
    // new uglifyJsPlugin()
  ],
  devServer: {
    // 项目构建路径
    contentBase: path.resolve(__dirname, 'dist'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 5000,
    // 自动打开浏览器
    open: true,
    // 实时刷新
    inline:true
  },
}