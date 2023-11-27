const {DataTypes} = require("sequelize")
const sequelize = require("../helpers/banco")

const Cardapio = require('./Cardapio')

const UsuarioModel = sequelize.define('Usuario', {
    usuario:{
        type: DataTypes.STRING,
        primaryKey: true
    } ,
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

UsuarioModel.hasMany(Cardapio.Model, {foreignKey: 'usuario'})

module.exports = {
    
    async create(usuario, senha, admin){
        const newUser = await UsuarioModel.create({ usuario: usuario, senha: senha, admin: admin })
        return newUser
    }, 
    async update(usuario1, usuario2, senha, admin){
        return await UsuarioModel.update({usuario: usuario2, senha: senha, admin: admin}, {where: {usuario: usuario1}})
    },
    async delete(usuario){
        return await UsuarioModel.destroy({where: {usuario: usuario}})
    }, 
    async listAll(){
        return await UsuarioModel.findAll()
    }, 
    async findByUsername(usuario){
        return await UsuarioModel.findOne({where: {usuario: usuario}})
    },
    
    Model: UsuarioModel

};