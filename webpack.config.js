// const path = require('path')
// const HtmlWebpackPlugin = require('html=webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// module.exports = {
// 	mode: "development",
//     entry: {
//         main: path.resolve(__dirname, './src/index.js'),
//     },
// 	output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: '[name].bundle.js',
//     },
// 	plugins: [
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({template: "./src/index.j"}),

// 	],
// }
// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
//   entry: './index',
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/dist/'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       }
//     ]
//   }
// }


const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader" 
          }, {
            loader: "sass-loader"
          }]
        },
		// {
		// 	test: /\.(png|svg|jpg|gif|ico|)$/,
		// 		use: [{
		// 	loader: 'file-loader',
		// 	options: {
		// 		name: f => {
		// 			// let dirNameInsideAssets = path.relative(path.join(__dirname, 'src'), path.dirname(f));
		// 			return `[name].[ext]`;
		// 		}
		// 	}
		// }],
		// },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)?$/, loader: 'ts-loader'
      },
      {
        test: /\.css$/,
		use: [
			"style-loader",
			{
			  loader: "css-loader",
			  options: {
				importLoaders: 1,
				modules: true,
			  },
			},
		  ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// module.exports = {
// 	mode: "development",
//     entry: {
//         main: path.resolve(__dirname, './src/index.js'),
//     },
// 	output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: '[name].bundle.js',
//     },
// 	plugins: [
//         // new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({template: "./src/index.html"}),

// 	],
// 	rules: [
// 		{
// 			test: /\\.js$/,
// 			loader: "babel-loader",
// 			exclude: "/node_modules/",
// 		},
// 		// CSS rules
// 		{
// 			test: /\\.css$/,
// 			use: [
// 					"style-loader",
// 				{
// 				loader: "css-loader",
// 				options: {
// 					importLoaders: 1,
// 					modules: true,
// 				},
// 				},
// 				],
// 		},
//     ],
// }



// // var path = require('path');
// // var webpack = require('webpack');

// // module.exports = {
// //   entry: './index',
// //   output: {
// //     path: path.join(__dirname, 'dist'),
// //     filename: 'bundle.js',
// //     publicPath: '/dist/'
// //   },
// //   module: {
// //     loaders: [
// //       {
// //         test: /\.jsx?$/,
// //         loader: 'babel-loader',
// //         exclude: /node_modules/
// //       }
// //     ]
// //   }
// // }