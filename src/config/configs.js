module.exports = {
  username: 'root',
  password: '123456',
  database: 'crud_sequelize',
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
