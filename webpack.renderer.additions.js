const path = require('path');

module.exports = {
  output: {
    pathinfo: false,
  },
  resolve: {
    alias: {
      '@renderer': path.resolve(__dirname, 'src/renderer/'),
    },
  },
};
