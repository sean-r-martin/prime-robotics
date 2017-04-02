'use strict';

const Sequelize = require('sequelize');

const name = process.env.DATABASE_NAME || 'react-boilerplate';
console.log('DATABASE_NAME', process.env.DATABASE_NAME)
const url = process.env.DATABASE_URL || `postgres://localhost:5432/${name}`;

const db = new Sequelize(url, {
  logging: false
});

module.exports = db;
