const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

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
    // new HtmlWebpackPlugin({
    //   template: "./index.html", // Use your index.html as a template
    //   filename: "index.html",
    // }),
    new ESLintPlugin({
      extensions: ['.js', '.ts'],
    }),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',  // 指定HTML模板路径
      filename: 'index.html'  // 输出的文件名
    })
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
        use: [
          // 根据运行环境判断使用那个 loader
          (process.env.NODE_ENV === 'development' ?
            'style-loader' :
            MiniCssExtractPlugin.loader),
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'  // 输出到 images 文件夹
        }
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],  // 使用 `resolve.extensions` 声明自动解析 `.ts` 后缀文件，这意味着代码如 `import "./a.ts"` 可以忽略后缀声明，简化为 `import "./a"` 文件
  },
};