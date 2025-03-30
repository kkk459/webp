const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Ensure this is the correct entry file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean output directory before each build
  },
  mode: "development", // Set mode to development
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve static files from dist
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true, // Ensures correct routing for SPAs
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Use your index.html as a template
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};