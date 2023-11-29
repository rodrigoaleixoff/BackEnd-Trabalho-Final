const swaggerAutogen = require('swagger-autogen')()

output = './swagger_doc.json'
endpoit = ['./app.js']

swaggerAutogen(output, endpoit)