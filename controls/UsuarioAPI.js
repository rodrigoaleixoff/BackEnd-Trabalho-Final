var express = require('express');
var router = express.Router();

var UsuarioDAO = require('../models/Usuario')

router.get('/', async (req, res) =>  {
    const list = await UsuarioDAO.listAll()
    res.json(list)
});

router.post('/', async (req, res) => {
    const {usuario, senha, admin} = req.body 
    var conta = await UsuarioDAO.create(usuario, senha, admin)
    if(conta)
        res.json(conta)
    else
        res.status(500).json({msg: 'Falha ao criar o usuario'})
})

router.put('/', async (req, res) => {
    const {id, usuario, senha, admin} = req.body
    var alterar = await UsuarioDAO.create(id, usuario, senha, admin)
    if(alterar)
        res.json(alterar)
    else 
        res.status(500).json({msg: 'Falha ao atualizar o usuario'})
})

router.delete('/:id', async (req, res) => {
    var excluir = await UsuarioDAO.delete(req.params.id)
    if(excluir)
        res.json(excluir)
    else 
        res.status(500).json({msg: 'Falha ao deletar o usuário'})
})

module.exports = router;