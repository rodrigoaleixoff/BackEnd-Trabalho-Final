const express = require('express')
const router = express.Router()

const UsuarioDAO = require('../models/Usuario')

router.get('/', (req,res) =>{
    let valor = UsuarioDAO.listAll()
    res.json(valor)
})

router.post('/', async (req,res) =>{
    const {usuario, senha, admin} = req.body
    let novo = UsuarioDAO.create(usuario, senha, admin)
    if (novo)
        res.json(novo)
    else
        res.status(500).json({msg: "Não foi possivel criar a conta."})
})

router.put('/', async (req,res) => {
    const {id, usuario, senha, admin} = req.body
    let update = UsuarioDAO.update(id, usuario, senha, admin)
    if (update)
        res.json(update)
    else
        res.status(500).json({msg: "Não alterado"})
})

router.delete('/', (req,res) =>{
    const id = req.body.id
    let deletado = UsuarioDAO.delete(id)
    if (deletado)
        res.json(deletado)
    else
        res.status(500).json({msg: "Usuario não deletado"})
})

module.exports = router