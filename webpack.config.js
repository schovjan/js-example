const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src')
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: 'index.html',
			filename: 'index.html'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};