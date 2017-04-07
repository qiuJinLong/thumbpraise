const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	entry: {
		index: [
			path.join(__dirname, "../src/public/scripts/Thumb.es")
		],
		tags: [
			path.join(__dirname, "..", "src/public/scripts/x-praise.es")
		]
	},
	output: {
		path: path.join(__dirname, "../build/public/"),
		//output.publicPath 表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换。
		publicPath:"../",
		filename: "scripts/[name].[chunkhash:5].js"
	},
	module: {
		loaders: [
			{
				test:/\.es$/,
				exclude:/(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets:["es2015", "stage-0"]
				}
			},
			{
				test:/\.(png|jpg)$/,
				loader:"url-loader?limit=8192&name=images/[hash:5].[name].[ext]"
			},
			{
				test:/\.css$/i,
				//在这个loader的阶段，ExtractTextPlugin 它在中间插了一脚，把css从js中分离出来
				loader:ExtractTextPlugin.extract({fallback:"style-loader",use:"css-loader"})
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV:'"prod"'
			}
		}),
		//js和css分离
		new ExtractTextPlugin("stylesheets/[name]-[chunkhash:5].css"),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "scripts/common/vendor-[chunkhash:5].js"
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: false
			}
		}),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: {removeAll: true } },
			canPrint: true
		})
	]
}