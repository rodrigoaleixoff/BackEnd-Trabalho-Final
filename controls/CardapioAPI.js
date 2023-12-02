const express = require('express')
const router = express.Router()
const Auth = require('../helpers/Auth')

const CardapioDAO = require('../models/Cardapio')
const Usuario = require('../models/Usuario')

async function paginacao(item, page, limit){

    let result = []

    let totalPage = Math.ceil(item.length / limit)
    let count = (page * limit) - limit

    let delimiter = count + limit

    if (page <= totalPage){

        for (let i = count; i < delimiter; i++){

            result.push(item[i])
            count++

        }

    } else return false

    return result

}

async function validar(usuario, usuarioDecodificado){

    const verificar = await Usuario.findByUsername(usuarioDecodificado)

    if (usuario === usuarioDecodificado || verificar.admin == true) return true
    else return false

}

router.post ('/', Auth.validaAcesso, async (req, res) => {

    const {usuario, titulo, descricao} = req.body

    if (validar(usuario, req.usuarioDecodificado)){

        const novoCardapio = await CardapioDAO.create(usuario, titulo, descricao)

        if(novoCardapio) res.json({msg: "Novo Cardapio"})
        else res.status(500).json({msg: "Falha ao criar cardapio"})

    } else res.status(500).json({msg: "Voce nao tem autorizacao"})

})

router.get('/', async (req,res) =>{

    const {page = 1} = req.query
    const limit = 5

    const list = await CardapioDAO.listAll()

    const paginaListed = await paginacao(list, page, limit)

    if (!paginaListed) res.json({msg: "Nao ha cardapio nessa pagina"})
    else res.json({paginado: paginaListed, geral: list})

})

router.get('/:usuario', async (req, res) => {

    const usuario = req.params.usuario
       
    const {page = 1} = req.query
    const limit = 5

    const list = await CardapioDAO.findByUsername(usuario)

    const paginaListed = await paginacao(list, page, limit)

    if (!paginaListed) res.json({msg: "Nao ha cardapio nessa pagina"})
    else res.json({paginado: paginaListed, geral: list})


})

router.put('/', Auth.validaAcesso, async (req, res) => {

    const {id, titulo, descricao} = req.body

    const verificar = await CardapioDAO.list(id)

    if (verificar(verificar.usuario, req.usuarioDecodificado)){

        const atualizado = await CardapioDAO.update(id, titulo, descricao)

        if (atualizado) res.json(atualizado)
        else res.status(500).json({ msg: "Cardapio nao atualizado"})

    } else res.status(500).json({msg: "Voce nao tem autorizacao"})

})

router.delete('/', async (req, res) => {

    const id = req.body.id

    const validar = await CardapioDAO.list(id)

    if (verificar(validar.usuario, req.usuarioDecodificado)){

        await CardapioDAO.delete(id)
        
        const verificar = await CardapioDAO.findById(id)
    
        if (!verificar) res.json({ msg: "Cardapio excluido com sucesso"})
        else res.status(500).json({ msg: "Nao foi possivel excluir o cardapio"})
        
    } else res.status(500).json({msg: "Voce nao tem autorizacao"})

})



module.exports = router