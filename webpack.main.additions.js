module.exports = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx', '.jsx'],
  },
};
