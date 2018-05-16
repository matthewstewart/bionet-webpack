const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTextPlugin = new ExtractTextPlugin('public/style.css', {
  allChunks: true
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
	    {
	        test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader')
	    },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }            
    ]
  },
  resolve: {
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  plugins: [
    htmlWebpackPlugin,
    extractTextPlugin
  ]
};