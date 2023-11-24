const {DataTypes} = require('sequelize')
const sequelize = require('../helpers/banco')

const CardapioModel = sequelize.define('Cardapio', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {
    
    async create(titulo){
        const criar = await CardapioModel.create({titulo: titulo})
        return criar
    },
    async delete(id){
        return await CardapioModel.destroy({where: {_id: id}})
    },
    async update(id, titulo){
        return await CardapioModel.update({_id:id})
    }, 
    async list(usuario){
        return await CardapioModel.findByPk(usuario)
    },

    Model : CardapioModel
}