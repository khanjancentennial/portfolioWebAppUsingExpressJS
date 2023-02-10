/**
 * Enrollment Number :- 301307330
 * Name :- Khanjan Dave
 */



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
  // res.redirect();
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});


/* GET contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});


module.exports = router;
