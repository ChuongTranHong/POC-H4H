var express = require('express');
var bodyParser = require('body-parser')
var routes = require('./server/router/index')()

var app = express();
var port = process.env.PORT || 8080;
var logger = require('morgan');
// existing express server
var app = express();
app.use(bodyParser.json());
app.use('/api', routes);
app.use("/", express.static(__dirname + "/public/"));
app.use(logger('dev'));


app.listen(port);
// we start a webpack-dev-server with our config
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
console.log(config.output.path);
new WebpackDevServer(webpack(config), {
  contentBase:"./public",
  publicPath: config.output.publicPath,
   hot: true,
   historyApiFallback: true,
   proxy: {
     "*": "http://localhost:8080"
   }
}).listen(9000, 'localhost', function (err, result) {
   if (err) {
     console.log(err);
   }

   console.log('Listening at localhost:9000');
});