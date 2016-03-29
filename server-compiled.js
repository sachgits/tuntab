'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _schema = require('./data/schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_PORT = 3000;
var GRAPHQL_PORT = 8080;

// Expose a GraphQL endpoint
var graphQLServer = (0, _express2.default)();
graphQLServer.use('/', (0, _expressGraphql2.default)({
  graphiql: true,
  pretty: true,
  schema: _schema.Schema
}));
graphQLServer.listen(GRAPHQL_PORT, function () {
  return console.log('GraphQL Server is now running on http://localhost:' + GRAPHQL_PORT);
});

// Serve the Relay app
var compiler = (0, _webpack2.default)({
  entry: _path2.default.resolve(__dirname, 'js', 'app.js'),
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      test: /\.js$/
    }]
  },
  output: { filename: 'app.js', path: '/' }
});
var app = new _webpackDevServer2.default(compiler, {
  contentBase: '/public/',
  proxy: { '/graphql': 'http://localhost:' + GRAPHQL_PORT },
  publicPath: '/js/',
  stats: { colors: true }
});
// Serve static resources
app.use('/', _express2.default.static(_path2.default.resolve(__dirname, 'public')));
app.listen(APP_PORT, function () {
  console.log('App is now running on http://localhost:' + APP_PORT);
});

//# sourceMappingURL=server-compiled.js.map