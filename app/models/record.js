'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Mixed    = Schema.Types.Mixed;

const RecordSchema = new Schema({
  domain: String,
  date:   {type: Date, default: Date.now},
  data:   Mixed
});

RecordSchema
  .virtual('log-date')
  .get(() => {
    return this._id.getTimestamp()
  });

mongoose.model('Record', RecordSchema);
