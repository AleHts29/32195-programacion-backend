const express = require('express')


const { Router } = express;
const carritosRouter = new Router();


// importamos la clase Container
const ContenedorArchivo = require('../contenedores/ContenedorArchivoCarritos')

// Se instancia la clase contenedor
const ProductService = new ContenedorArchivo("./Aqui va la ruta del archivo")



// Endpoints
carritosRouter.post('/', async (req, res) => {
    // logica

    res.json()
})

carritosRouter.delete('/:id', async (req, res) => {
    // logica

    res.json()
})

carritosRouter.get('/:id/products', async (req, res) => {
    // logica

    res.json()
})


carritosRouter.post('/:id/products', async (req, res) => {
    // logica

    res.json()
})


carritosRouter.delete('/:id/products/:id_prod', async (req, res) => {
    // logica

    res.json()
})

module.exports = carritosRouter