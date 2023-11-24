const express = require('express')
const router = express.Router()

const LoginDAO = require('..control/login.js')

router.get('/', (req,res) =>{

})

router.post('/', (req,res) =>{
    const {usuario, senha} = req.body
    LoginDAO.create(Usuario, senha)
})

module.exports = router