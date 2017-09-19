const express = require('express');
const app = express(); // creates an instance of an express application
const router = require('./routes');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Middleware
app.use(volleyball);

// Load CSS
app.use(express.static('public'));

// Routes
app.use(jsonParser);
app.use(urlencodedParser);
app.use(router);


app.listen(3000, () => {
  console.log('listening');
});
