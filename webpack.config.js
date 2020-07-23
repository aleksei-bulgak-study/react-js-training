function getEnv() {
  const env = process.env.ENV;
  return env ? env.toLowerCase() : 'prod';
}

// eslint-disable-next-line import/no-dynamic-require
module.exports = require(`./webpack/webpack.config.${getEnv()}`);
