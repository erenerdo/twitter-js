const express = require('express');
const app = express(); // creates an instance of an express application
const router = require('./routes');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);

// Middleware
app.use(volleyball);

// Load CSS
app.use(express.static('public'));

// Routes
app.use(router);


app.listen(3000, () => {
  console.log('listening');
});
