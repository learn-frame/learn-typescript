const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const env = process.env.NODE_ENV
const isEnvProduction = env === 'production'
const isEnvDevelopment = env === 'development'

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // isEnvProduction && new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
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
