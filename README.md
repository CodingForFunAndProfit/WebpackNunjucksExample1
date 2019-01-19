# Example project to get Nunjucks working with Webpack the way I want

## Requirements
* the goal is to compile / build nunjuck templates with a jsondata file to static html files
* using webpack with webpack-dev-server
* using the nunjucks js templating engine
* watching for all nunjucks-templates should work to trigger webpack bundeling/compiling and livereload
* context for nunjucks files should be possible for every template individual
* optional: getting all options working the htmlwebpackplugin is able to without the nunjucks-loader
** some options work, some don't, html-loader seems to prevent them and seems to work for some with the interpolate parameter set. I'm fine with the current status, let's see when the next problems arrive


## NPM packages used
* webpack
* webpack-cli
* webpack-dev-server
* clean-webpack-plugin
* html-webpack-plugin
* html-loader
* nunjucks
* nunjucks-html-loader

## Using this repository
```bash
npm install
```

## Fresh start
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server clean-webpack-plugin html-webpack-plugin html-loader nunjucks nunjucks-html-loader
```
