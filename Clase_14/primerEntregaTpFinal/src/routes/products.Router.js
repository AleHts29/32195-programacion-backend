const express = require('express')


const { Router } = express;
const productosRouter = new Router();


// importamos la clase Container
const ContenedorArchivo = require('../contenedores/ContenedorArchivo')

// Se instancia la clase contenedor
const ProductService = new ContenedorArchivo("./Aqui va la ruta del archivo")


// funcion Error
function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

// Middleware para Administrador
const esAdmin = true

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin(req.url, req.method))
    } else {
        next()
    }
}


// Endpoints
productosRouter.get('/', async (req, res) => {
    // logica

    res.json()
})
//    -->   /api/productos/5
productosRouter.get('/:id', async (req, res) => {
    // logica

    res.json()
})

// tiene permisos un admin
productosRouter.post('/', soloAdmins, async (req, res) => {
    // logica

    res.json()
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    // logica

    res.json()
})

productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    // logica

    res.json()
})


module.exports = productosRouter