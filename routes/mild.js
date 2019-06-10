var express = require('express');
var router = express.Router();
var knex = require('../knex')

//Get All Cold weather_items

router.get('/', (req, res, next) => {
  return knex('mild')
    .then(mildItems => {
      res.send(mildItems)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router;
