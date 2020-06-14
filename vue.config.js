process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  // outputDir: '../api/public',
  publicPath:
    process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '/',
  devServer: {
    // https: true,
    overlay: {
      warnings: true,
      errors: false,
    },
  },
};
