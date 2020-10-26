const server = require(`./webpack/webpack.config.server`);
function getEnv() {
  const env = process.env.NODE_ENV;
  return env ? env.toLowerCase() : 'prod';
}
const client = require(`./webpack/webpack.config.${getEnv()}`);
module.exports = [client, server];
