const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env) => {
  const mfConfig = require('../../../modulefederation.config.json');
  const deps = require('../package.json').dependencies;
  return {
    mode: 'development',
    output: {
      publicPath: 'http://localhost:3000/',
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: true,
    },
    devtool: 'eval-cheap-source-map',
    plugins: [
      new ModuleFederationPlugin({
        name: mfConfig.shell.name,
        filename: 'remoteEntry.js',
        exposes: {},
        remotes : { ...mfConfig.shell.development.remotes },
        shared: {
          react: {
            eager:true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            eager:true,
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "@mui/material": {
            eager:true,
            singleton: true,
            requiredVersion: deps["@mui/material"],
          },
          "@mui/icons-material": {
            eager:true,
            singleton: true,
            requiredVersion: deps["@mui/icons-material"],
          },
          "@emotion/react": {
            eager:true,
            singleton: true,
            requiredVersion: deps["@emotion/react"],
          },
          'recoil': {
            singleton: true,
            requiredVersion: deps["recoil"],
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