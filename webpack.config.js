var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  	entry: './src/index.js',

  	output: {
    	filename: 'bundle.js',
    	path: path.resolve(__dirname, 'dist')
  	},

  	module: {
    	rules: [
    	{
        	test: /\.html$/,
        	use: [
        	{
            	loader: "html-loader",
            	options: { minimize: true }
          	}
        	]
		}
    	]
	},

  	plugins: [
    	new CleanWebpackPlugin(['dist']),
    	new HtmlWebpackPlugin({
      		filename: 'index.html',
      		template: 'src/index.html',
      		inject : "body"
  		}),
  	]
}