const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
	},
	target: 'web',
	devServer: {
		port: '5000',
		static: {
			directory: path.join(__dirname, 'public')
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json','.tsx', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								mode: "local",
								localIdentName: "[name]__[local]--[hash:base64:5]",
							},
						},
					},
				],
				exclude: GLOBAL_CSS_REGEXP,
			},
			{
				test: GLOBAL_CSS_REGEXP,
				use: ["style-loader", "css-loader"],
			},
		],

	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html')
		})
	]
};
