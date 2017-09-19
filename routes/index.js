const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send(nunjucks.render('index.html'));
//   // var res = nunjucks.render('index.html');
//   // nunjucks.render('index.html', function(err, res) {
//   //   if (err) throw err;
//   // });
// });

router.get('/news', (req, res) => {
  res.send('News Page ');
});

module.exports = router;
