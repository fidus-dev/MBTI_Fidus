const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',

	devtool: 'inline-source-map',

	entry: {
		app: path.resolve(__dirname, 'src', 'index.tsx'),
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],

	devServer: {
		host: '127.0.0.1',
		port: 8000,
		inline: true,
		overlay: true,
		historyApiFallback: true,
		hot: true,
		open: true,
		compress: true,
		contentBase: path.join(__dirname, 'public'),
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			// 모든 '.js' 출력 파일은 'source-map-loader'에서 다시 처리한 소스 맵 있음
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: '[path][name]__[local]--[hash:base64:5]',
							},
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};
