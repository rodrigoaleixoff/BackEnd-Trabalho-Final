const {DataTypes} = require('sequelize')
const sequelize = require('../helpers/banco')

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

module.exports = {
    
    async create(id, nome, preco, descricao){
        return await ProdutosModel.create({ nome: nome, preco:preco, descricao:descricao}, {where: {cardapioId: id}})
    },
    async update(id, nome, preco, descricao){
        return await ProdutosModel.update({nome: nome, preco: preco, descricao: descricao}, {where: {id:id}})
    },
    async delete(id){
        return await ProdutosModel.destroy({where: {id: id}})
    },
    async listByCardapio(idCardapio){
        return await ProdutosModel.findAll({where: {cardapioId: idCardapio}})
    },
    async listByName(nome){
        return await ProdutosModel.findAll({where: {nome: nome}})
    },

    Model: ProdutosModel
}