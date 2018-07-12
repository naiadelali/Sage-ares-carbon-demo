module.exports = {
  // Load common Jest config shared across Sage:
  preset: './node_modules/carbon-factory/jest.conf.json',
  // Regex patterns for spec files to run:
  testMatch: [ '**/__spec__.js', '**/*.spec.js' ],
  // Common setup files and spec helpers across all projects:
  setupFiles: [
    'raf/polyfill',
    './src/__spec_helper__/index.js'
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./fileTransformer.js"
  }
};
