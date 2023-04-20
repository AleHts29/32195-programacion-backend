import { config } from "../../deps.ts";
import { MongoClient } from "../../deps.ts";
import logger from "./logger.ts";

const { DB_PORT, DB_HOST } = config();
const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}`;

const client = new MongoClient();

try {
    await client.connect(MONGO_URI);
    logger.debug(`Base de datos conectada ${MONGO_URI}`);
} catch (error) {
    logger.error(error)
}

const dbConn = client.database('clase48')

export default dbConn;