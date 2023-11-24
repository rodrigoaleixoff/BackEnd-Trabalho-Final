const {DataTypes} = require("sequelize")
const sequelize = require("../helpers/banco")

const Cardapio = require('./Cardapio')

const UsuarioModel = sequelize.define('Usuario', {
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
        defaultValue: false
    }
})

//UsuarioModel.hasMany(Cardapio, where({foreignKey: 'usuario'}))

module.exports = {
    
    async create(usuario, senha, admin){
        const newUser = await UsuarioModel.create({ nome: usuario, senha: senha, admin: admin })
        return newUser
    }, 
    async update(id, usuario, senha, admin){
        return await UsuarioModel.update({usuario: usuario, senha: senha, admin: admin}, {where: {_id: id}})
    },
    async delete(id){
        return await UsuarioModel.destroy({where: {_id: id}})
    }, 
    async listAll(){
        return await UsuarioModel.findAll()
    }, 
    
    Model: UsuarioModel

};