'use strict';

const express = require('express');
const router  = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'some fancy title goes here'
  });
});
