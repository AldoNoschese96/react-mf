const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const mfConfig = require("../../../modulefederation.config.json");


module.exports = (env) => {
  const mfConfig = require("../../../modulefederation.config.json");
  const deps = require('../package.json').dependencies;
  return {
    mode: 'development',
    output: {
      publicPath: 'http://localhost:3001/',
    },
    devServer: {
      port: 3001,
      historyApiFallback: true,
      hot: true,
    },
    devtool: 'eval-cheap-source-map',
    plugins: [
      new ModuleFederationPlugin({
        name: mfConfig.header.name,
        filename: 'remoteEntry.js',
        exposes: { ...mfConfig.header.development.exposes },
        remotes : { ...mfConfig.header.development.remotes },
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "@mui/material": {
            singleton: true,
            requiredVersion: deps["@mui/material"],
          },
          "@mui/icons-material": {
            singleton: true,
            requiredVersion: deps["@mui/icons-material"],
          },
          'recoil': {
            singleton: true,
            requiredVersion: deps["recoil"],
          },
          "@emotion/react": {
            singleton: true,
            requiredVersion: deps["@emotion/react"],
          }
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