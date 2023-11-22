const Sequelize = require("sequelize")

const sequelize = new Sequelize("trabalho_final", "root", "Ralley012", {host: "localhost", dialect: "mysql"})

sequelize.authenticate()
    .then(() => console.log("Conectado no Mysql!"))
    .catch(error => console.log(error))
    .catch(error => console.error("Erro ao conectar ao MySQL:", error));

module.exports = sequelize