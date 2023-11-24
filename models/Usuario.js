const {DataTypes} = require("sequelize")
const sequelize = require("../helpers/banco")

const Usuario = sequelize.define('Usuario', {
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    } ,
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    }
})

module.exports = {
    
    async create(usuario, senha, admin){

    }, 
    async update(id, usuario, senha, admin){

    },
    async delete(id, usuario, senha){

    },
    
    Model: Usuario

};