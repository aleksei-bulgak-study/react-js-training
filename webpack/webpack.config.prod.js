const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
});
