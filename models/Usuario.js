const {DataTypes} = require("sequelize")
const sequelize = require("../helpers/banco")

const Cardapio = require('./Cardapio')

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

Usuario.hasMany(Cardapio)

Cardapio.belongsTo(Usuario)

module.exports = {
    
    async create(usuario, senha, admin){

    }, 
    async update(id, usuario, senha, admin){

    },
    async delete(id, usuario, senha){

    },
    
    Model: Usuario

};