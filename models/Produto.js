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

module.exports = {
    
    async create(nome, preco, descricao){

    },
    async update(id, nome, descricao){

    },
    async delete(id){

    },
    async list(){

    },
    async listByName(nome){

    },

    Model: Produtos
}