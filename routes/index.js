const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Homepage');
});

router.get('/news', (req, res) => {
  res.send('News Page ');
});

module.exports = router;
