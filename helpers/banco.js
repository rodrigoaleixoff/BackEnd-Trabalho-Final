const Sequelize = require("sequelize")
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {host: process.env.HOST, dialect: process.env.DIALECT})

sequelize.authenticate()
    .then(() => console.log("Conectado no Mysql!"))
    .catch(error => console.log(error))
    .catch(error => console.error("Erro ao conectar ao MySQL:", error));

module.exports = sequelize