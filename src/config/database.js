const dbConfig = require('./configs.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

const db = {};

db.sequelize = sequelize;

db.employees = require('../models/Employee')(sequelize, Sequelize);

module.exports = db;
