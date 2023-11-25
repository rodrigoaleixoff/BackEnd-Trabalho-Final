const express = require('express')
const sequelize = require('../helpers/banco')
const router = express.Router()

router.get('/', async (req,res) => {
    await sequelize.sync({force: true})
    res.json({msg: 'Banco criado com sucesso'})
})

module.exports = router