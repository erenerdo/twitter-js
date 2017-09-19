const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank.js');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', {
    tweets: tweets,
    showform: true
   });
});

module.exports = router;
