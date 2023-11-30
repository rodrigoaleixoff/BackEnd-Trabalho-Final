const express = require('express')
const router = express.Router()

const ProdutoDAO = require('../models/Produto')

router.post('/', async (req,res) => {
    const {id, nome, preco, descricao} = req.body
    const criar = await ProdutoDAO.create(id, nome, preco, descricao)
    if (criar) res.json({msg: "Produto criado"})
    else res.status(500).json({msg: "Falha ao cadastrar produto"})
})

router.get('/:id', async (req,res) =>{
    const mostrar = await ProdutoDAO.listByCardapio(id)
    res.json(mostrar)
})

router.get('/', async (req,res) => {
    const nome = req.body.nome
    const mostrar = await ProdutoDAO.listByName(nome)
    res.json(mostrar)
})

router.put('/', async (req,res) => {
    const {id, nome, preco, descricao} = req.body
    const atualizar = await ProdutoDAO.update(id, nome, preco, descricao)
    if (atualizar) res.json({msg: "Produto atualizado com sucesso"})
})

router.delete('/:id', async (req,res) => {
    const deletar = await ProdutoDAO.delete(id)
    if (deletar) res.json({msg: "Produto excluido com sucesso"})
    else res.status(500).json({msg: "Falha em excluir produto"})
})

module.exports = router