const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const isEnvDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: { app: './src/index.tsx' },
  output: {
    filename: '[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            // loader: 'awesome-typescript-loader',
            options: {
              // 开启 transpileOnly 会提高编译速度，但不会再编译过程中进行类型检查
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // ForkTsCheckerWebpackPlugin 可以在 ts-loader 使用 transpileOnly: true 的情况下仍然进行类型检查
    new ForkTsCheckerWebpackPlugin(),

    // CheckerPlugin 则是 awesome-typescript-loader ts-loader 使用 transpileOnly: true 的情况下仍然进行类型检查
    // new CheckerPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: isEnvDevelopment && 'cheap-module-eval-source-map',
  devServer: isEnvDevelopment
    ? {
        port: 8080,
      }
    : undefined,
}
