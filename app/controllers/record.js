'use strict';

const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose');
const Record   = mongoose.model('Record');

module.exports = function (app) {
  app.use('/record', router);
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


  const key  = body.key;
  const data = body.data;


  new Record({domain, data})
    .save((err) => {
      if (err) {
        res.status(500);
        return res.jsonp({message: 'persistance error', error: err})
      }

      res.jsonp({message: 'success'});
    });

});

