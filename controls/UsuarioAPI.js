var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

var Auth = require('../helpers/Auth')
var UsuarioDAO = require('../models/Usuario')

router.get('/', async (req, res) =>  {

    const list = await UsuarioDAO.listAll()
    res.json(list)

});

//Entrar
router.post('/entrar', async (req,res) => {

    const {usuario, senha} = req.body

    const usuarioLogado = await UsuarioDAO.findByUsername(usuario)

    if (!usuarioLogado) res.status(500).json({msg: "Usuario não encontrado"})

    if (usuarioLogado.senha == senha){

        let token = jwt.sign({usuario: usuario}, '123', {expiresIn: "1 hour"})
        res.json({login: true, token: token})

    }   else res.status(500).json({login: false, msg: 'Usuario invalido'})

})

//Criar padrao
router.post('/', async (req, res) => {

    const {usuario, senha} = req.body 

    var verificar = await UsuarioDAO.findByUsername(usuario)

    if (!verificar){

        var conta = await UsuarioDAO.create(usuario, senha, false)
        res.json(conta)
        
    } else res.status(500).json({msg: 'Falha ao criar o usuario'})

})

//Criar administrador
router.post('/admin', Auth.validaAcesso, async (req,res) =>{

    const isAdmin = await UsuarioDAO.findByUsername(req.usuarioDecodificado)

    if (isAdmin.admin){

        const {usuario, senha} = req.body 

        var verificar = await UsuarioDAO.findByUsername(usuario)

        if (!verificar){

            var conta = await UsuarioDAO.create(usuario, senha, true)
            res.json(conta)
            
        } else res.status(500).json({msg: 'Usuario ja existe'})

    } else res.status(500).json({msg: "Voce nao e um administrador."})

})

router.put('/', Auth.validaAcesso, async (req, res) => {

    const {usuarioAnt, usuarioNovo, senha} = req.body

    const isAdmin = await UsuarioDAO.findByUsername(req.usuarioDecodificado)

    if (req.usuarioDecodificado === usuarioAnt || isAdmin.admin){

        var encontrarAnt = await UsuarioDAO.findByUsername(usuarioAnt)
        var encotrarNovo = await UsuarioDAO.findByUsername(usuarioNovo)

        if (encontrarAnt){

            if (!encotrarNovo){

                var alterar = await UsuarioDAO.update(usuarioAnt, usuarioNovo, senha, isAdmin.admin)
                var usuario = await UsuarioDAO.findByUsername(usuarioNovo)

                if (alterar) res.json({usuario: usuario, msg: "Voce deve entrar denovo."});
                else res.status(500).json({msg: 'Falha ao atualizar o usuário'});

            } else res.status(500).json({msg: "Novo nome do usuario ja existe"})

        } else res.status(500).json({msg: 'Falha ao encontrar o usuario'})

    } else res.status(500).json({msg: "Voce nao e o dono da conta ou um administrador"})

})

//Deletar padrao
router.delete('/:usuario', Auth.validaAcesso, async (req, res) => {

    if (req.params.usuario == req.usuarioDecodificado){

        var excluir = await UsuarioDAO.delete(req.params.usuario)

        if (excluir) res.json({msg: "Usuario excluido com sucesso"})
        else res.status(500).json({msg: 'Falha ao deletar o usuário'})

    } else res.status(500).json({msg: "Voce nao pode excluir esse usuario"})

})

//Deletar nao administradores
router.delete('/admin/:usuario', Auth.validaAcesso, async (req, res) => {

    const validar = await UsuarioDAO.findByUsername(req.usuarioDecodificado)
    const notAdmin = await UsuarioDAO.findByUsername(req.params.usuario)

    if (validar.admin == true){

        if (notAdmin.admin == false){

            var excluir = await UsuarioDAO.delete(req.params.usuario)

            if (excluir) res.json({msg: "Usuario excluido com sucesso"})
            else res.status(500).json({msg: 'Falha ao excluir usuário'})

        } else res.status(500).json({msg: "O usuario que esta tentando excluir e administrador."})

    } else res.status(500).json({msg: "Voce nao e administrador."})
    
})

module.exports = router;