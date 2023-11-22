const {DataTypes} = require('sequelize')
const sequelize = require('../helpers/banco')

const Produtos = sequelize.define('Produtos',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING
    }
});

module.exports = Produtos;