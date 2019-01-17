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
    		title: 'My App title',
      		filename: 'index.html',
      		template: 'src/index.njk',
      		inject : "body"
  		}),
  		new HtmlWebpackPlugin({
    		title: 'My App title',
      		filename: 'contact.html',
      		template: 'src/contact.njk',
      		inject : "body"
  		}),
  	]
}