const path = require("path");

module.exports = {
  mode: "production",
  target: "es5",
  entry: {
    testIE: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle_[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
};
