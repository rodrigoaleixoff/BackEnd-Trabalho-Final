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

ProdutosModel.belongsTo(Cardapio.Model, { foreignKey: 'cardapioId' })

module.exports = {
    
    async create(nome, preco, descricao){
        const criar = await ProdutosModel.create({ nome: nome, preco:preco, descricao:descricao})
        return criar
    },
    async update(id, nome, preco, descricao){
        return await ProdutosModel.update({nome: nome, preco: preco, descricao: descricao}, {where: {_id:id}})
    },
    async delete(id){
        return await ProdutosModel.destroy({where: {_id: id}})
    },
    async list(){
        return await ProdutosModel.findAll()
    },
    async listByName(nome){
        return await ProdutosModel.findAll({where: {nome: nome}})
    },

    Model: ProdutosModel
}