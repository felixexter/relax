module.exports = config => ({
  ...config,
  entry: {
    ...config.entry,
    preview: [
      require.resolve('@babel/polyfill'),
      require.resolve('wicg-focus-ring'),
      ...config.entry.preview,
    ],
  },
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
})
