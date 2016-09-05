const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;

// tell it where to look
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  // tell it where to get the files
  // Entry accepts a path or an object of entries.  We'll be using
  // the latter form given it's convenient with more complex configurations
  entry: {
    app: PATHS.app
  },
  // tell it where to put the webpack output
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {});
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
