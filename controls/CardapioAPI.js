const express = require('express')
const router = express.Router()
const Auth = require('../helpers/Auth')

const CardapioDAO = require('../models/Cardapio')


router.post ('/', async (req, res) => {
    const {usuario, titulo, descricao} = req.body
    const novoCardapio = await CardapioDAO.create(usuario, titulo, descricao)
    if(novoCardapio) {
        res.json({msg: "Novo Cardapio"})
    } 

})

router.get('/:usuario', async (req, res) => {
    const usuario = req.params.usuario
    const list = await CardapioDAO.findByUsername(usuario)
    res.json(list)
})

router.put('/', async (req, res) => {
    const {id, titulo, descricao} = req.body
    const atualizado = await CardapioDAO.update(id, titulo, descricao)
    if (atualizado){
        res.json(atualizado)
    } else{
        res.status(500).json({ msg: "Cardapio nao atualizado"})
    }
})

router.delete('/', async (req, res) => {
    const id = req.body.id
    console.log(id)
    await CardapioDAO.delete(id)
    const verificar = await CardapioDAO.findById(id)
    if (!verificar){
        res.json({ msg: "Cardapio excluido com sucesso"})
    } else {
        res.status(500).json({ msg: "Nao foi possivel excluir o cardapio"})
    }

})



module.exports = router