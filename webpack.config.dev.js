const path = require('path');
const webpack = require('webpack');

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify(
    process.env.NODE_ENV.indexOf("development") > -1 ? "development" : process.env.NODE_ENV
  )
};

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3030',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
      new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader'],
        // include: path.join(__dirname, 'src')
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js"],
    alias: {
      '@occmundial/occ-atomic': path.resolve(__dirname, './build/index')
    }
  }
};
