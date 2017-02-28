import webpack from 'webpack'
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    js: './src/main.js',
    css: './src/main.css',
  },
  output: { path: '/public', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css-loader!postcss-loader'
        ),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        postcss: [
          require('postcss-easy-import')({ glob: true }),
        ]
      }
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
