import Contenedor from '../../classes/Contenedor.class.js';
import CustomError from '../../classes/CustomError.class.js';
import MongoDBClient from '../../classes/MongoDBClient.class.js';
import logger from '../../config/loggers.js';
import { asPOJO, renameField, removeField } from '../../utils/objectUtils.js'

await (new MongoDBClient()).connect();

class ContenedorMongoDB extends Contenedor{

    constructor(modelo) {
        super();
        this.coleccion = modelo;
    }

    async listar(id) {
        try {
            // this.conn.connect();

            const docs = await this.coleccion.find({ '_id': id }, { __v: 0 })
            if (docs.length == 0) {
                throw new CustomError(500, 'listar by id', 'empty result.');
            } else {
                const result = renameField(asPOJO(docs[0]), '_id', 'id')
                return result
            }
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarbyId()', error);
            logger.error(cuserr);
            throw cuserr;
        } finally {
            // this.conn.disconnect();
        }
    }

    async listarAll() {
        try {
            // this.conn.connect();

            let docs = await this.coleccion.find({}, { __v: 0 }).lean()
            docs = docs.map(asPOJO)
            docs = docs.map(d => renameField(d, '_id', 'id'))
            return docs
        } catch (error) {
            const cuserr = new CustomError(500, 'Error al listarAll()', error);
            logger.error(cuserr);
            throw cuserr;
        } finally {
            // this.conn.disconnect();
        }
    }

    async guardar(nuevoElem) {
        try {
            let doc = await this.coleccion.create(nuevoElem);
            doc = asPOJO(doc)
            renameField(doc, '_id', 'id')
            removeField(doc, '__v')
            return doc
        } catch (error) {
            throw new CustomError(500, 'Error al guardar', error);
        }
    }

    async actualizar(nuevoElem) {
        try {
            renameField(nuevoElem, 'id', '_id')
            const { n, nModified } = await this.coleccion.replaceOne({ '_id': nuevoElem._id }, nuevoElem)
            if (n == 0 || nModified == 0) {
                throw new Error('Error al actualizar: no encontrado')
            } else {
                renameField(nuevoElem, '_id', 'id')
                removeField(nuevoElem, '__v')
                return asPOJO(nuevoElem)
            }
        } catch (error) {
            throw new CustomError(500, 'Error al actualizar:', error);
        }
    }

    async borrar(id) {
        try {
            const { n, nDeleted } = await this.coleccion.deleteOne({ '_id': id })
            if (n == 0 || nDeleted == 0) {
                throw new CustomError(500, 'Error al borrar: no encontrado', 'empty');
            }
        } catch (error) {
            throw new CustomError(500, 'Error al borrar', error);
        }
    }

    async borrarAll() {
        try {
            await this.coleccion.deleteMany({})
        } catch (error) {
            throw new CustomError(500, 'Error al borrar todo', error);
        }
    }
}

export default ContenedorMongoDB