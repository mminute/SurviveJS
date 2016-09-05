const path = require('path');

// tell it where to look
const PATHS = {
  app: path.join(_dirname, 'app'),
  build: path.join(_dirname, 'build')
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