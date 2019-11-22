// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  output: {
    pathinfo: false,
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'webassembly/experimental',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        'wc3-custom-hotkeys-parser': {
          test: /node_modules\/@drdgvhbh\/wc3-custom-hotkeys-parser\/wc3_custom_hotkeys_parser_bg.wasm/,
          name: 'wc3-custom-hotkeys-parser',
          chunks: 'async',
        },
      },
    },
  },
  externals: ['react', 'react-dom'],
  resolve: {
    alias: {
      '@material-ui/styles': path.resolve(
        __dirname,
        'node_modules',
        '@material-ui/styles',
      ),
      '@renderer': path.resolve(__dirname, 'src/renderer/'),
    },
  },
};
