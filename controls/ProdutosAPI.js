const express = require('express')
const router = express.Router()
const Auth = require('../helpers/Auth')

const ProdutoDAO = require('../models/Produto')
const Usuario = require('../models/Usuario')
const Cardapio = require("../models/Cardapio")

async function verificar(id, usuarioDecodificado){

    const usuario = await Cardapio.findById(id)
    const usuarioDecoded = await Usuario.findByUsername(usuarioDecodificado)

    if (usuario.usuario === usuarioDecodificado || usuarioDecoded.admin == true) return true
    else return false

}

router.post('/', Auth.validaAcesso, async (req,res) => {

    const {id, nome, preco, descricao} = req.body

    if (verificar(id, req.usuarioDecodificado)){

        const criar = await ProdutoDAO.create(id, nome, preco, descricao)

        if (criar) res.json({msg: "Produto criado"})
        else res.status(500).json({msg: "Falha ao cadastrar produto"})

    } else res.status(500).json({msg: "Voce nao tem autorizacao"})
    
})

router.get('/:id', async (req,res) =>{

    const mostrar = await ProdutoDAO.listByCardapio(req.params.id)
    res.json(mostrar)

})

router.get('/', async (req,res) => {

    const mostrar = await ProdutoDAO.listAll()
    res.json(mostrar)

})

router.put('/', Auth.validaAcesso, async (req,res) => {

    const {id, nome, preco, descricao} = req.body

    if (verificar(id, req.usuarioDecodificado)){

        const atualizar = await ProdutoDAO.update(id, nome, preco, descricao)

        if (atualizar) res.json({msg: "Produto atualizado com sucesso"})
        else res.status(500).json({msg: "Falha ao atualizar produto"})

    } else res.status(500).json({msg: "Voce nao tem autorizacao"})

    
})

router.delete('/:id', Auth.validaAcesso, async (req,res) => {

    const deletar = await ProdutoDAO.delete(id)

    if (verificar(id, req.usuarioDecodificado)){

        if (deletar) res.json({msg: "Produto excluido com sucesso"})
        else res.status(500).json({msg: "Falha em excluir produto"})

    } else res.status(500).json({msg: "Voce nao tem autorizacao"})

})

module.exports = router