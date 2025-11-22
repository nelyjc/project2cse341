//swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc={
    info: {
        title: 'Favorites API',
        description: 'API for managing employees favorites',
    },
    host: 'localhost:7000',
    schemes: ['https', 'http']
};         

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);