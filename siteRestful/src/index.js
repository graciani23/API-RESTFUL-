const express = require('express');
const request = require('request-promise');
const port = 3001

const app = express()


app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('public'))


// rota
// *request é uma operação assícrona
app.get('/produtos', async(req, res) => {
    const result = await request.get('http://localhost:3000/api/v1/products')
    const products = JSON.parse(result)
    res.render('products', { products })
})

app.listen(port, (err) => {
    if (err) {
        console.log('Houve um erro ao se conectar com o servidor!')
    } else {
        console.log(`Servidor rodando na porta ${port}`)
    }
})