const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path')

module.exports = (env) => {
  const mfConfig = require("../../../modulefederation.config.json");
  const deps = require('../package.json').dependencies;
  return {
    mode: 'production',
    devtool: 'hidden-source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../dist'),
      clean: true,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: mfConfig.state.name,
        filename: 'remoteEntry.js',
        exposes: { ...mfConfig.state.development.exposes },
        remotes : {},
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          'recoil': {
            singleton: true,
            requiredVersion: deps["recoil"],
          },
        },
      }),
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