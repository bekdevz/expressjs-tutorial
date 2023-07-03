const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('expressjs-tutorial', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
