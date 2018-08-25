const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env === 'production' ? 'production' : 'development',
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, 'public', '**', '*'),
    ]),
  ],
};
