const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map', // для отладки
  devServer: { // локальный сервер с live reload
    contentBase: './dist',
    writeToDisk: true, // чтобы CleanWebpackPlugin не очищал dist
  },
  output: {
    filename: '[name].[contenthash].js', // [contenthash] меняется при изменении файла (для сброса кэша)
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // сторонние библиотеки в отдельный файл vendors.js
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(), // очистка папки dist
    new HtmlWebpackPlugin({ // автоматическая генерация html-файла
      title: 'Webpack Demo',
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // сброс кэша для css
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // css в отдельный файл
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]' }, // css modules
              importLoaders: 1
            }
          },
          'postcss-loader', // для postcss-preset-env (который включает в себя autoprefixer)
          'sass-loader' // + минифицирует стили по умолчанию
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
            }
          }
        ],
      }
    ],
  },
};
