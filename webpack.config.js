const path = require('path');
const dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    libraryTarget: 'this',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/')
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new dotenv()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'example'),
    watchContentBase: true,
    watchOptions: {
      ignored: /build/
    }
  }
}
