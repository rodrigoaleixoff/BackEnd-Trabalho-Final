const {DataTypes} = require('sequelize')
const sequelize = require('../helpers/banco')

const Produtos = require('./Produto')

const CardapioModel = sequelize.define('Cardapio', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING
    }
})

CardapioModel.hasMany(Produtos.Model, {foreignKey: 'cardapioId'})

module.exports = {
    
    async create(usuario, titulo, descricao){
        const criar = await CardapioModel.create({usuario: usuario, titulo: titulo, descricao: descricao})
        return criar
    },
    async delete(id){
        return await CardapioModel.destroy({where: {id: id}})
    },
    async update(id, titulo, descricao){
        return await CardapioModel.update({titulo: titulo, descricao: descricao}, {where: {id:id}})
    }, 
    async listAll(){
        return await CardapioModel.findAll()
    },
    async list(id){
        return await CardapioModel.findByPk({id: id})
    },
    async findByUsername(usuario){
        return await CardapioModel.findAll({where: {usuario: usuario}})
    },
    async findById(id){
        return await CardapioModel.findAll({where: {id: id}})
    },

    Model : CardapioModel
}