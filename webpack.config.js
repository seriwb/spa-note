module.exports = {
  entry: { js: './src/main.js' },
  output: { path: './public', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  devtool: 'source-map',
};
