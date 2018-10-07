const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.js|\.jsx$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|dist)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: ["@babel/plugin-proposal-class-properties"],
					},
				},
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: './src/index.d.ts', to: './index.d.ts',
		}]),
	],
	externals: {
		'react': 'commonjs react',
		'react-dom': 'commonjs react-dom',
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devtool: 'source-map',
};
