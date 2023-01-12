const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  mode: "production",
  entry: {
    popup: "./src/popup.jsx",
    background: "./src/background.js",
    content: "./src/content.js",
    option: "./src/option/option.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
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
      template: "./src/popup.html",
      filename: "popup.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/option/option.html",
      filename: "option.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};
