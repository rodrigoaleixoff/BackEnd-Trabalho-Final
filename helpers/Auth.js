const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

module.exports = {
    validaAcesso: async (req,res,next) => {
        let bear = req.headers['authorization'] || ''
        let token = bear.split(' ')
        if (token[0] == 'Bearer'){
            token = token[1]
        }
        jwt.verify(token, '123', async (err, decoded) => {
            if (err) res.status(500).json({msg: "Token invalido"})

            const usuario = decoded.usuario

            const usuarioBanco = await Usuario.findByUsername(usuario)

            if(!usuarioBanco){
                res.status(500).json({msg: "Usuario nao encontrado"})
            } else{
                if (usuarioBanco.admin){
                    req.usuario = usuario
                    next()
                } else{
                    res.status(500).json({msg: 'Acesso negado'})
                }
            }
        })
    }
}