import ContenedorMongoDB from "../containers/ContenedorMongoDB.js";
import RegistroModel from "../registro.model.js";

class RegistroDAOMongoDB extends ContenedorMongoDB {
    constructor(){
        super(RegistroModel);
        // agrego metodos adiconales de ser necesario
    }
}

export default RegistroDAOMongoDB;