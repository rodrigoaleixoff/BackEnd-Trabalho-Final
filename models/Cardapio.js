const {DataTypes} = require('sequelize')
const sequelize = require('../helpers/banco')

const Cardapio = sequelize.define('Cardapio', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Cardapio