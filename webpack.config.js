function getEnv() {
  const env = process.env.ENV;
  return env ? env.toLowerCase() : "prod";
}

module.exports = require(`./webpack/webpack.config.${getEnv()}`);
