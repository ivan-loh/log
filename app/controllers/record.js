'use strict';

const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
const Record   = mongoose.model('Record');

module.exports = function (app) {
  app.use('/data', router);
};

router.post('/add/:domain', (req, res, next) => {

  const domain = req.params.domain;
  const body   = req.body;

  if (!domain) {
    res.status(500);
    return res.jsonp({message: 'no domain'});
  }

  if (!body) {
    res.status(500);
    return res.jsonp({message: 'no content'});
  }

  let data;
  try {
    data = JSON.parse(body);
  } catch (e) {
    res.status(500);
    return res.jsonp({
      message: 'unparseable content', error: e
    });
  }

  new Record({domain, data})
    .save((err) => {
      if (err) {
        res.status(500);
        return res.jsonp({message: 'persistance error', error: err})
      }

      res.jsonp({message: 'success'});
    });

});

