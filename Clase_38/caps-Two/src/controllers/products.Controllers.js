const { obtenerDatos, crearDato, deleteServices } = require('../services/products.services.js')

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

const deleteDatosControllers = async (req, res) => {
    let { id } = req.params
    await deleteServices(id)
    res.json({ msj: "delete product" })
}


module.exports = {
    getDatosControllers,
    postDatosControllers,
    deleteDatosControllers
}