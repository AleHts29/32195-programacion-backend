const { obtenerDatos, crearDato } = require('../services/products.services.js')

const getDatosControllers = async (req, res) => {
    // armo lokgica de peticion
    let datos = await obtenerDatos()
    res.json(datos)
}

const postDatosControllers = async (req, res) => {
    let dato = req.body;
    await crearDato(dato)
    res.json({ dato })
}

module.exports = {
    getDatosControllers,
    postDatosControllers
}