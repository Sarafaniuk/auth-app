const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
dotenv.config();

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
		publicPath: '/',
	},
	target: 'web',
	devServer: {
		port: process.env.REACT_APP_PORT,
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.tsx', '.ts', '.json'],
		alias: {
			process: "process/browser"
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(png|jpe?g|gif|jp2|webp)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'less-loader' },
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env)
		})
	],
}
