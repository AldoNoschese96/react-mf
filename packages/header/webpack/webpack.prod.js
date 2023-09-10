const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path')

module.exports = (env) => {
  return {
    mode: 'production',
    devtool: 'hidden-source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../dist'),
      clean: true,
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        minRatio: 0.8,
        threshold: 10240,
        test: /\.js$|\.css$|\.html$/,
      }),
      new HtmlWebpackPlugin({
        inject: true,
        minify: true,
        template: path.resolve(__dirname, '/public', 'index.html'),
      }),
    ],
  };
}