const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path')

module.exports = (env) => {
  const mfConfig = require('../../../modulefederation.config.json');
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