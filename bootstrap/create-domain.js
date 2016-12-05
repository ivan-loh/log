'use strict';

const config   = require('../config/config');
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


const Domain = mongoose.model('Domain');
new Domain({
  domain: 'some-app',
  key:'some-key'
}).save(console.log);
