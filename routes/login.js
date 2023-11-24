const express = require('express')
const router = express.Router()

const LoginDAO = require('..control/login.js')

router.get('/', (req,res) =>{
    LoginDAO.getUsers()
})

router.post('/', validaArquivo, async (req,res) =>{
    const {usuario, senha} = req.body
    LoginDAO.create(Usuario, senha)
})

router.delete('/', (req,res) =>{

})

module.exports = router