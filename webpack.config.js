const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    libraryTarget: "this",
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/")
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "example"),
    watchContentBase: true,
    watchOptions: {
      ignored: /build/
    }
  }
};
