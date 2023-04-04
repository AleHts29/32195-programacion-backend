import NoticiasDAOFactory from "../classes/NoticiasDAOFactory.class.js"

const DAO = NoticiasDAOFactory.get();

export async function obtenerNoticias(){
    return await DAO.listarAll();
}