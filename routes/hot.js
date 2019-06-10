var express = require('express');
var router = express.Router();
var knex = require('../knex')

//Get All Cold weather_items

router.get('/', (req, res, next) => {
  return knex('hot')
    .then(hotItems => {
      res.send(hotItems)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router;
