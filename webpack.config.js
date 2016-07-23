module.exports = {
  entry: './app/js/index.js',
  output: {
    path: __dirname + '/app/js',
    filename: 'bundle.js',
    publicPath: 'js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        cacheDirectory: true,
        query: {
          plugins: [
            "transform-decorators-legacy",
          ],
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  devServer: {
    contentBase: './app'
  }
}
