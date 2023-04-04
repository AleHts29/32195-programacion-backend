import ContenedorMongoDB from "../containers/ContenedorMongoDB.js";
import NoticiaModel from "../Noticias.model.js";

class NoticiasDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(NoticiaModel);
    }
}

export default NoticiasDAOMongoDB;