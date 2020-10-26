const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackConfig = require('../webpack/webpack.config.server');
const webpackConfigClient = require('../webpack/webpack.config.dev');
const serverRenderer = require('../src/serverRenderer').default;

const app = express();

if (process.env.NODE_ENV === 'development') {

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(webpackConfigClient));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  app.use(express.static('public'));
  app.use(serverRenderer());
}

app.listen(3000, () => {
  console.info(`Express listening on port 3000`); // eslint-disable-line
});

module.exports = app;
