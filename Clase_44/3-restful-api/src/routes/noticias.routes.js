import { Router } from "express";
import NoticiasController from "../controllers/noticias.controller.js";
const controlador = new NoticiasController();

const routerNoticias = Router();

routerNoticias.get('/', controlador.obtenerNoticias);
routerNoticias.get('/:id?', controlador.obtenerNoticia);
routerNoticias.post('/', controlador.guardarNoticia);
routerNoticias.put('/:id', controlador.actualizarNoticia);
routerNoticias.delete('/:id', controlador.borrarNoticia);

export default routerNoticias;