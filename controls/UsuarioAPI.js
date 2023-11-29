var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

var UsuarioDAO = require('../models/Usuario')

router.get('/', async (req, res) =>  {
    const list = await UsuarioDAO.listAll()
    res.json(list)
});

//Entrar
router.post('/entrar', async (req,res) => {
    const {usuario, senha} = req.body
    const usuarioLogado = await UsuarioDAO.findByUsername(usuario)
    if (usuarioLogado.senha == senha){
        let token = jwt.sign({usuario: usuario, admin: usuarioLogado.admin}, '123')
        res.json({login: true, token: token})
    }   else{
        res.status(500).json({login: false, msg: 'Usuario invalido'})
    }
})

//Criar
router.post('/', async (req, res) => {
    const {usuario, senha, admin} = req.body 
    var verificar = await UsuarioDAO.findByUsername(usuario)
    if (!verificar){
        var conta = await UsuarioDAO.create(usuario, senha, admin)
        res.json(conta)
    } else
        res.status(500).json({msg: 'Falha ao criar o usuario'})
})

router.put('/', async (req, res) => {
    const {usuarioAnt, usuarioNovo, senha, admin} = req.body
    var encontrarAnt = await UsuarioDAO.findByUsername(usuarioAnt)
    var encotrarNovo = await UsuarioDAO.findByUsername(usuarioNovo)

    if (encontrarAnt){
        if (!encotrarNovo){
            var alterar = await UsuarioDAO.update(usuarioAnt, usuarioNovo, senha, admin)
            var usuario = await UsuarioDAO.findByUsername(usuarioNovo)
            if (alterar){
                res.json(usuario);
                } else {
                    res.status(500).json({msg: 'Falha ao atualizar o usuário'});
                }
        } else{
            res.status(500).json({msg: "Novo nome do usuario ja existe"})
        }
    } else 
        res.status(500).json({msg: 'Falha ao encontrar o usuario'})
})

router.delete('/:usuario', async (req, res) => {
    var excluir = await UsuarioDAO.delete(req.params.usuario)
    if(excluir)
        res.json({msg: "Usuario excluido com sucesso"})
    else 
        res.status(500).json({msg: 'Falha ao deletar o usuário'})
})

module.exports = router;