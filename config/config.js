'use strict';

const path     = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env      = process.env.NODE_ENV || 'development';

const config = {

  development: {
    root: rootPath,
    key: '',
    app: {
      name: 'log'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/log-development'
  },

  test: {
    root: rootPath,
    key: '',
    app: {
      name: 'log'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/log-test'
  },

  production: {
    root: rootPath,
    key: '',
    app: {
      name: 'log'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/log-production'
  }

};

module.exports = config[env];
