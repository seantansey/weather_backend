var express = require('express');
var router = express.Router();
var knex = require('../knex')

//Get All Cold weather_items

router.get('/', (req, res, next) => {
  return knex('cold')
    .then(coldItems => {
      res.send(coldItems)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router;
