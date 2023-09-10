const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = (env) => {
  const mfConfig = require("../../../modulefederation.config.json");
  const deps = require('../package.json').dependencies;
  return {
    mode: 'development',
    output: {
      publicPath: 'http://localhost:3003/',
    },
    devServer: {
      port: 3003,
      historyApiFallback: true,
      hot: true,
    },
    devtool: 'eval-cheap-source-map',
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
      new HtmlWebpackPlugin({
        inject: true,
        minify: false,
        template: path.resolve(__dirname, '/public', 'index.html'),
      }),
    ],
  };
}