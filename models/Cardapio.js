const {DataTypes} = require('sequelize')
const sequelize = require('../helpers/banco')

const Produto = require('./Produto')

const CardapioModel = sequelize.define('Cardapio', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

//CardapioModel.hasMany(Produto, { foreignKey: 'cardapioId' })

module.exports = {
    
    async create(titulo){

    },
    async delete(id){

    },
    async update(id, titulo){

    }, 
    async list(){

    },

    Model : CardapioModel
}