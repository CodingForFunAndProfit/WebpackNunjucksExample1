var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var sitedata = require('./src/data/site.json');

module.exports =  {
  	entry: './src/index.js',

  	output: {
    	filename: 'bundle.js',
    	path: path.resolve(__dirname, 'dist')
  	},
  	devServer: {
  		contentBase: './src/',
  		watchContentBase: true,
  	},
  	module: {
    	rules: [
    	{
        	test: /\.(html|njk|nunjucks)$/,
        	use: ['html-loader',
        	{
            	loader: "nunjucks-html-loader",
            	options: { 
            		searchPaths: ['./src'],
					context: sitedata,
            	}
          	}
        	]
		}
    	]
	},

  	plugins: [
    	new CleanWebpackPlugin(['dist']),
    	new HtmlWebpackPlugin({
    		templateParameters: { 'tPara': 'TestParam' }, //does not work
    		'customOptions': 'testCustomOptions', //does not work
    		title: 'HtmlWebpackPlugin title', //does not work
    		minify: true, //does not work
    		cache: true, //does not work?
    		hash: false, //does work
    		'meta': { 'theme-color': '#4285f4' }, //does work
      		filename: 'index.html', //does work
      		template: 'src/index.njk', //does work
      		inject : "body" //does work
  		}),
  		new HtmlWebpackPlugin({
    		title: 'HtmlWebpackPlugin title',
      		filename: 'contact.html',
      		template: 'src/contact.njk',
      		inject : "body"
  		}),
  	]
}