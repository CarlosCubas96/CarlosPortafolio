const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/, // Maneja archivos Sass/SCSS y CSS
        use: [
          "style-loader", // Inserta CSS en el DOM
          "css-loader", // Traduce CSS en CommonJS
          "sass-loader", // Compila Sass a CSS
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpila ES6+ a código compatible
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Maneja fuentes
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/proyect-1.html",
      filename: "proyect-1.html",
    }),
       new HtmlWebpackPlugin({
      template: "./src/pages/experience.html",
      filename: "experience.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/resources"),
          to: "assets/resources",
        },
      ],
    }),
  ],
  devServer: {
    static: "./dist",
    port: 9001,
  },
};
