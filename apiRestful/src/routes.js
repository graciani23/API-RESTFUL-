const productHandler = require('./handlers/product')

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productHandler.find
    },
    {
        //sai salvar a informação no mongo
        method: 'POST',
        path: '/api/v1/products',
        handler: productHandler.save
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productHandler.remove,
        options: {
            cors: true // permite que um domínio externo faço um delete na minha api
        }
    }
    ,
    {
        method: 'PUT',
        path: '/api/v1/products/{id}',
        handler: productHandler.atualiza
    }
]