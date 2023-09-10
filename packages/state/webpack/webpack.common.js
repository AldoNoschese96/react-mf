const webpack = require("webpack");
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  return {
    stats : {
      errorDetails: true,
    },
    resolve: {
      alias: {
        '@state': path.resolve(__dirname, '/src/state'),
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: `./.env${
          Object.keys(env)[Object.keys(env).length - 1] ? `.${Object.keys(env)[Object.keys(env).length - 1]}` : ''
        }`,
      }),
    ],
  }
};