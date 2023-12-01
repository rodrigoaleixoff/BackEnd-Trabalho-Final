const jwt = require('jsonwebtoken')

module.exports = {
    validaAcesso: async (req,res,next) => {
        let bear = req.headers['authorization'] || ''
        let token = bear.split(' ')
        if (token[0] == 'Bearer'){
            token = token[1]
        }
        jwt.verify(token, '123', async (err, decoded) => {
            if (err) return res.status(500).json({msg: "Token invalido"})
            else {
                req.usuarioDecodificado = decoded.usuario
                next()              
        }
        })
    }
}