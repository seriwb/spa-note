const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    js: './src/main.js',
    css: './src/main.css',
  },
  output: { path: __dirname + '/public', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // query: {
        //     presets: ['es2015', 'react']
        // }
      },
    // ],
    // rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader!postcss-loader",
        })
        // loader: [
        //   'css-loader?importLoaders=1',
        //   'postcss-loader',
        // ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
    }),
  ],
  devServer: {
    contentBase: './public',
    port: 8080,
    inline: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
