# Example project to get Nunjucks working with Webpack the way I want

## Requirements
* the goal is to compile / build nunjuck templates with a jsondata file to static html files
* using webpack with webpack-dev-server
* using the nunjucks js templating engine
* watching for all nunjucks-templates should work to trigger webpack and hotswap files
* context for nunjucks files should be possible for every template individual
* optional: getting all options working the htmlwebpackplugin is able to without the nunjucks-loader


## NPM packages used
* webpack
* webpack-cli
* webpack-dev-server
* clean-webpack-plugin
* html-webpack-plugin
* html-loader
* nunjucks


```bash
npm install --save-dev webpack webpack-cli webpack-dev-server clean-webpack-plugin html-webpack-plugin html-loader nunjucks
```
