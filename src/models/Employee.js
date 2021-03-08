module.exports = (sequelize, DataTypes) => {
  return sequelize.define('employee', {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
  });
};
