const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const glob = require("glob")

module.exports = {
  entry: {
    "bundle.infolink.min.js": glob.sync("build/static/?(js|jsx|css)/main.*.?(js|jsx|css)").map(f => path.resolve(__dirname, f)),
    //"bundle.infolink.js": glob.sync("src/components/*.?(js|jsx|css)").map(f => path.resolve(__dirname, f))
  },
  output: {
    filename: "../public/js/[name]",
    libraryTarget: 'umd', // 采用通用模块定义
    //libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    //globalObject: 'this', // 兼容node和浏览器运行，避免window is not undefined情况
    library: "InfoLinkComponents"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ],
  },
  plugins: [new UglifyJsPlugin()],
}