const path = require('path');

// tell it where to look
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // tell it where to get the files
  entry: {
    app: PATHS.app
  },
  // tell it where to put the webpack output
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};