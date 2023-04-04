import mongoose from "mongoose";
import { config } from "../config/config.js";
import logger from "../config/loggers.js";
import CustomError from "./CustomError.class.js";
import DBClient from "./DBClient.class.js";

class MongoDBClient extends DBClient {
    constructor(){
        super();
        this.connected = false;
        this.client = mongoose;
    }

    async connect(){
        try {
            await this.client.set("strictQuery", false)
            await this.client.connect(config.mongodb.host, config.mongodb.options);
            this.connected = true;

            logger.info('Base de datos conectada');
        } catch (error) {
            const objErr = new CustomError(500, "Error al conectarse a mongodb", error);
            logger.error(objErr);
            throw objErr;
        }
    }

    async disconnect(){
        try {
            await this.client.connection.close();
            this.connected = false;
            logger.info('Base de datos desconectada');
        } catch (error) {
            const objErr = new CustomError(500, "Error al desconectarse a mongodb", error);
            logger.error(objErr);
            throw objErr;
        }
    }
}

export default MongoDBClient;