const jwt = require('jsonwebtoken')

module.exports = {
    validaAcesso: (req,res,next) => {
        let bear = req.header['Authorization'] || ''
        let token = bear.split(' ')
        if (token[0] == 'Bearer'){
            token = token[1]
        }
        jwt.verify(token, '123', (err, decoded) => {
            if (err) res.status(500).json({msg: "Token invalido"}) 
            else{
                req.usuario = decoded.usuario
                next()
            }
        })
    }
}