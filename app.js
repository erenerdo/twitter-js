const express = require('express');
const app = express(); // creates an instance of an express application

const router = require('./routes');
const volleyball = require('volleyball');

const nunjucks = require('nunjucks');

class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person('Mike');
const person2 = new Person('Lebron');
const person3 = new Person('Kobe');

const peopleArr = [person1, person2, person3];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);
nunjucks.configure('./views/', {noCache: true});

const locals = {
  title: 'Our Title',
  people: peopleArr
};

// nunjucks.render('index.html', locals, function (err, output) {
//   if (err) throw Error;
//   console.log(output);
// });

// res.render('index', locals);
app.get('/', (req, res) => {
  res.render('index', locals);
});

app.listen(3000, () => {
  console.log('listening');
});

app.use(volleyball);

app.use(router);

