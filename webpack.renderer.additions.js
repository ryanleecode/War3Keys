const path = require('path');

module.exports = {
  watchOptions: {
    aggregateTimeout: 5000,
    poll: 10000
  },
  output: {
    pathinfo: false
  },
  resolve: {
    alias: {
      '@renderer': path.resolve(__dirname, 'src/renderer/')
    }
  }
}
