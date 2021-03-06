const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: {
		index: [
			path.join(__dirname, "../src/public/scripts/Thumb.es")
			
		],
		star: [
			path.join(__dirname, "../src/public/scripts/Star.es")
		],
		tags: [
			path.join(__dirname, "..", "src/public/scripts/x-praise.es"),
			path.join(__dirname, '../src/public/scripts/x-star.es')
		]
	},
	output: {		
		path: path.join(__dirname, "../build/public/"),
		//output.publicPath 表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换
		publicPath:"../",
		filename: "scripts/[name].js"
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
				loader:"url-loader?limit=8192&name=images/[name].[ext]"
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
				NODE_ENV:'"dev"'
			}
		}),
		//js和css分离
		new ExtractTextPlugin("stylesheets/[name].css"),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "scripts/common/vendor.js"
		}),
		new HtmlWebpackPlugin({
			filename: "../views/layout.html",
			template: "src/widgets/layout.html",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "../views/index.html",
			template: "src/views/index.js",
			inject: false,
			chunks:["vendor", "index", "tags"]
		}),
		new HtmlWebpackPlugin({
			filename: "../views/star.html",
			template: "src/views/star.js",
			inject: false,
			chunks:["vendor", "star", "tags"]
		}),
		new HtmlWebpackPlugin({
			filename: '../widgets/star.html',
            template: 'src/widgets/star.html',        
            inject: false
        }),
		new HtmlWebpackPlugin({
			filename: "../widgets/index.html",
			template: "src/widgets/index.html",
			inject: false
		})

	]

}