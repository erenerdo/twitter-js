const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank.js');

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  // console.log(tweets);
  res.render( 'index', {
    tweets: tweets,
    showForm: true
   });
});

router.get('/users/:name', (req, res) => {
  // console.log(req.params.name);
  // console.log(tweetBank.find({name: req.params.name}));
  res.render('index', {
    tweets: tweetBank.find({name: req.params.name}),
    showForm: true
  });
});

router.get('/tweets/:id', (req, res) => {
  let num = Number(req.params.id);
  // console.log(num);
  // console.log(tweetBank.find({id: num}));
  res.render('index', {
    tweets: tweetBank.find({id: num}),
    showForm: true
  });
});
module.exports = router;
