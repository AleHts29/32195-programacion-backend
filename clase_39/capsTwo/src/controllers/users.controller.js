const {obtnerDatos, createData} = require('../services/users.service')


const getDatosController = async(req, res)=>{
    let data = await obtnerDatos();
    res.json(data)
}


const postDatosController = async(req, res)=>{
    let data = req.body
    let response = await createData(data);
    res.json(response);
}

module.exports = {
    getDatosController,
    postDatosController
}