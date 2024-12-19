// node가 제공해주는 path 패키지
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // 서비스할 용도인가 개발중인 상태인지를 스위칭하는 옵션
  entry: "./src/app.js", // 입력 지정
  output: {
    path: path.resolve(__dirname, "dist"), // __dirname: nodejs가 제공해주는 현재디렉토리 상수, dist: 출력할 디렉토리 이름
    filename: "bundle.js",
  },

  devServer: {
    compress: true,
    port: 9999,
  },

  module: {
    rules: [
      // loader 지정
      {
        test: /\.js$/,
        exclude: /node_modules/, // 특정 디렉토리 제외
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "2.3 setup webpack & babel",
      template: "index.html",
    }),
  ],
};
