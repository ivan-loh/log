'use strict';

const path     = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env      = process.env.NODE_ENV || 'development';

const config = {

  development: {
    root: rootPath,
    key: '',
    app: {
      name: 't-server'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/t-server-development'
  },

  test: {
    root: rootPath,
    key: '',
    app: {
      name: 't-server'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/t-server-test'
  },

  production: {
    root: rootPath,
    key: '',
    app: {
      name: 't-server'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/t-server-production'
  }

};

module.exports = config[env];
