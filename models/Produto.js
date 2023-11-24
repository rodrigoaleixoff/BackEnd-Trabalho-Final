const {DataTypes} = require('sequelize')
const sequelize = require('../helpers/banco')

const Cardapio = require('./Cardapio')

const ProdutosModel = sequelize.define('Produtos',{
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

//ProdutosModel.belongsTo(Cardapio, { foreignKey: 'cardapioId' })

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

    Model: ProdutosModel
}