const express = require('express')
const router = express.Router()
const swaggerAutogen = require('swagger-autogen')()

router.get('/', (req,res) => {

    output = '../swagger_doc.json'
    endpoit = ['./app.js']

    swaggerAutogen(output, endpoit)
        .then(() => {
            res.json('Swagger documentation generated successfully');
        })
        .catch((err) => {
            console.error('Error generating Swagger documentation:', err);
            res.status(500).json('Error generating Swagger documentation');
        });

})

module.exports = router