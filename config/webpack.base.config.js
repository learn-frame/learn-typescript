const HtmlWebpackPlugin = require('webpack-html-plugin')

module.exports = {
  entry: {
    'app': '../src/index.ts'
  },
  output: {
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
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
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: '../public/index.html',
        },
      ),
    ),
  ],
}
