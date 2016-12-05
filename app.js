'use strict';

const express  = require('express');
const config   = require('./config/config');
const glob     = require('glob');
const mongoose = require('mongoose');


/**
 * Database
 **/

mongoose.connect(config.db);
const db = mongoose.connection;
      db.on('error', function () {
        throw new Error('unable to connect to database at ' + config.db);
      });



/**
 * Models
 **/
glob
  .sync(config.root + '/app/models/*.js')
  .forEach((model) => { require(model); });



/**
 * Server
 **/
const app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port, () => {
  console.log('Server listening on ' + config.port);
});
