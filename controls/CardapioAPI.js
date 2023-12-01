const express = require('express')
const router = express.Router()
const Auth = require('../helpers/Auth')

const CardapioDAO = require('../models/Cardapio')
const Usuario = require('../models/Usuario')

async function validar(usuario, usuarioDecodificado){

    const verificar = await Usuario.findByUsername(usuarioDecodificado)

    if (usuario === usuarioDecodificado || verificar.admin == true) return true
    else return false

}

router.post ('/', Auth.validaAcesso, async (req, res) => {

    const {usuario, titulo, descricao} = req.body

    if (validar(usuario, req.usuarioDecodificado)){

        const novoCardapio = await CardapioDAO.create(usuario, titulo, descricao)

        if(novoCardapio) {

            res.json({msg: "Novo Cardapio"})

        } 

    }

})

router.get('/', async (req,res) =>{

    const list = await CardapioDAO.listAll()
    res.json(list)

})

router.get('/:usuario', async (req, res) => {

    const usuario = req.params.usuario

    const list = await CardapioDAO.findByUsername(usuario)
    res.json(list)

})

router.put('/', Auth.validaAcesso, async (req, res) => {

    const {id, titulo, descricao} = req.body

    const verificar = await CardapioDAO.list(id)

    if (verificar(verificar.usuario, req.usuarioDecodificado)){

        const atualizado = await CardapioDAO.update(id, titulo, descricao)

        if (atualizado) res.json(atualizado)
        else res.status(500).json({ msg: "Cardapio nao atualizado"})

    }

})

router.delete('/', async (req, res) => {

    const id = req.body.id

    const validar = await CardapioDAO.list(id)

    if (verificar(validar.usuario, req.usuarioDecodificado)){

        await CardapioDAO.delete(id)
        
        const verificar = await CardapioDAO.findById(id)
    
        if (!verificar) res.json({ msg: "Cardapio excluido com sucesso"})
        else res.status(500).json({ msg: "Nao foi possivel excluir o cardapio"})
        
    }

})



module.exports = router