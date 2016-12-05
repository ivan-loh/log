'use strict';

const express = require('express');
const router  = express.Router();

module.exports = function (app) {
    app.use('/data', router);
}

router.post('/', (req, res, next) => {

  const body = req.body;

  console.log(body);

  res.jsonp('ok');

});
