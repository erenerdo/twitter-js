const express = require('express');
const app = express(); // creates an instance of an express application

const router = require('./routes/index.js');
const volleyball = require('volleyball');

app.listen(3000, () => {
  console.log('listening');
});

app.use(volleyball);

app.use(router);

