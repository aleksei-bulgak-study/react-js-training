function getEnv() {
  const env = process.env.NODE_ENV;
  return env ? env.toLowerCase() : 'prod';
}
const client = require(`./webpack/webpack.config.${getEnv()}`);
module.exports = [client];
