import CustomError from './CustomError.class.js'

class Contenedor {
    async listarAll(){
        throw new CustomError(500, "Falta implementar 'listarAll' en Sub Clase")
    }

    async listar(){
        throw new CustomError(500, "Falta implementar 'listar' en Sub Clase")
    }

    async guardar(){
        throw new CustomError(500, "Falta implementar 'guardar' en Sub Clase")
    }

    async actualizar(){
        throw new CustomError(500, "Falta implementar 'actualizar' en Sub Clase")
    }

    async borrar(){
        throw new CustomError(500, "Falta implementar 'borrar' en Sub Clase")
    }

    async borrarAll(){
        throw new CustomError(500, "Falta implementar 'borrarAll' en Sub Clase")
    }
}

export default Contenedor;