const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/, // Maneja archivos Sass/SCSS y CSS
        use: [
          'style-loader', // Inserta CSS en el DOM
          'css-loader',   // Traduce CSS en CommonJS
          'sass-loader',  // Compila Sass a CSS
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpila ES6+ a código compatible
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Maneja imágenes
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Maneja fuentes
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about.html',
      filename: 'about.html',
    }),
  ],
  devServer: {
    static: './dist',
    port: 9001,
  },
};
