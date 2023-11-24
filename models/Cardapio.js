const {DataTypes} = require('sequelize')
const sequelize = require('../helpers/banco')

const Produto = require('./Produto')

const Cardapio = sequelize.define('Cardapio', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Cardapio.hasMany(Produto)

Produto.belongsTo(Cardapio)

module.exports = {
    
    async create(titulo){

    },
    async delete(id){

    },
    async update(id, titulo){

    }, 
    async list(){

    },

    Model : Cardapio
}