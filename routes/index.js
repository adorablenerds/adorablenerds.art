var express = require('express');
var router = express.Router();

// Import pseudo-CMS
const nav = require('../cms/nav');
const home = require('../cms/home');
const about = require('../cms/about');
const roadmap = require('../cms/roadmap');
const faq = require('../cms/faq');
const future = require('../cms/future');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    nav: nav.cms,
    home: home.cms,
    about: about.cms,
    roadmap: roadmap.cms,
    faq: faq.cms,
    future: future.cms});
});

module.exports = router;
