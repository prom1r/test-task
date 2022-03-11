const path = require("path");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },

      },
    ],
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
    },
  },
};
