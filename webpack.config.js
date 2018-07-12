const path = require('path');

module.exports = require('carbon-factory/webpack.config')({
  parcelifyPaths: [path.resolve(process.cwd(), './node_modules/carbon-react')],
  singlePageApp: true,
  port: 8095,
  publicPath:'/assets/',
  host:'localhost',
  resolve: {
    alias: {
      i18n: path.resolve(__dirname, 'src/i18n.js'),
    }
  },

  
});
