const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("public"),
    filename: "assets/js/bundle.js",
    assetModuleFilename: "assets/images/[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    host: "0.0.0.0",
    port: 9090,
    liveReload: true,
    compress: true,
    hot: false,
  },
};
