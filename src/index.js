const express = require('express');

const app = express();

const db = require('./config/database');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize.sync();

app.use('/employess', require('./controller/employee.controller'));

app.listen(3000);
