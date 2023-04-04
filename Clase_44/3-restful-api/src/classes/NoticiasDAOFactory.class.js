
import { config } from "../config/config.js";
import NoticiasDAOMem from "../models/daos/NoticiasMemoria.dao.js";
import NoticiasDAOFile from "../models/daos/NoticiasFile.dao.js";
import NoticiasDAOMongoDB from '../models/daos/NoticiasMongoDB.dao.js';

class NoticiasDAOFactory {
    static get() {
        console.log('Persistencia: ',config.server.PERS);

        switch (config.server.PERS) {
            case 'MEMORIA':
                return new NoticiasDAOMem();
            case 'FILE':
                return new NoticiasDAOFile();
            case 'MONGODB':
                return new NoticiasDAOMongoDB();
            default:
                return new NoticiasDAOMem();
        }
    }
}

export default NoticiasDAOFactory;