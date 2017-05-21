'use strict';

const path = require('path');
const express = require('express');
const app = express();
const router = require('./api');
const db = require('../db');

const morgan = require('morgan');
const logger = morgan('dev');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));

app.use('/api', router);

// if no routes match, this line servers up index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

function listenOnPort() {
  const port = process.env.PORT || 1337;
  app.listen(port, function () {
    console.log('The server is listening on port', port);
  });
}

function syncDatabase() {
  db.sync(
    {force: true}
  )
  .then(function () {
    console.log('Synchronized the database');
    listenOnPort();
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });
}

syncDatabase();
