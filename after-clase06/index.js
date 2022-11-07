const express = require('express')
const classContainer = require('./container/archivos.Container')
const moment = require('moment')

const app = express();
const PORT = 8070

// instanciamos la clase
const archivo = new classContainer('productos.txt')

const visitas = {
    products: 0,
    fecha_ingreso_products: '',
    prod_random: 0,
    fecha_ingreso_products_random: ''
}


app.get('/products', async (req, res) => {
    visitas.products++
    visitas.fecha_ingreso_products = moment().format('MMMM Do YYYY, h:mm:ss a');
    const prods = await archivo.leer()
    res.send({ Productos: prods })
})


app.get('/random', async (req, res) => {
    visitas.prod_random++
    visitas.fecha_ingreso_products_random = moment().format('MMMM Do YYYY, h:mm:ss a');
    const prods = await archivo.leer()
    const random = parseInt(Math.random() * prods.length)
    res.send({ Productos: prods[random] })
})


app.get('/visitas', (req, res) => {
    res.send({ visitas })
})



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})

// server.on('error', error => console.log(`error en server ${error}`))