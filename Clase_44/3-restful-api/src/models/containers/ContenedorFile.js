/*========== Modulos globales para DAOs ==========*/
import CustomError from "../../classes/CustomError.class.js";
import logger from "../../config/loggers.js";
import { promises as fs } from 'fs'
import { config } from '../../config/config.js'
import Contenedor from "../../classes/Contenedor.class.js";

class ContenedorFile extends Contenedor {
    constructor() {
        super();
        this.ruta = `${config.fileSystem.path}/noticias.json`;

        console.log('ContenedorFile:', `path file: ${this.ruta}`)
    }

    async listar(id) {
        const objs = await this.listarAll()
        const buscado = objs.find(o => o.id == id)
        return buscado
    }

    async listarAll() {
        try {
            const objs = await fs.readFile(this.ruta, 'utf-8')
            return JSON.parse(objs)
        } catch (error) {
            return []
        }
    }

    async guardar(obj) {
        const objs = await this.listarAll();

        const newObj = { ...obj}
        objs.push(newObj)

        try {
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            return newObj
        } catch (error) {
            throw new CustomError(`Error al guardar: ${error}`)
        }
    }

    async actualizar(elem) {
        const objs = await this.listarAll()
        const index = objs.findIndex(o => o.id == elem.id)
        if (index == -1) {
            throw new CustomError(`Error al actualizar: no se encontró el id ${id}`)
        } else {
            objs[index] = elem
            try {
                await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            } catch (error) {
                throw new CustomError(`Error al actualizar: ${error}`)
            }
        }
        return elem;
    }

    async borrar(id) {
        const objs = await this.listarAll()
        const index = objs.findIndex(o => o.id == id)
        if (index == -1) {
            throw new CustomError(`Error al borrar: no se encontró el id ${id}`)
        }

        objs.splice(index, 1)
        try {
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
        } catch (error) {
            throw new CustomError(`Error al borrar: ${error}`)
        }
    }

    async borrarAll() {
        try {
            await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            throw new CustomError(`Error al borrar todo: ${error}`)
        }
    }
}

export default ContenedorFile;