const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    database: 'project-db',
    username: 'admin',
    password: 'admin',
    host: 'database.sqlite'
});

module.exports = sequelize;