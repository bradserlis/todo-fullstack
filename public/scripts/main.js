const express = require('express');
const indexRoute = express.Router();
// const pizza = require('../db/pizza.js')

indexRoute.get('/', function(req, res) {
  res.render('index', {message: 'jlkjaklsjdfklajdklfjaklsdjkf'});
});

module.exports = indexRoute;
