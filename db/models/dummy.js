'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Dummy = db.define('dummy', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
  // options go here
});

module.exports = Dummy;
