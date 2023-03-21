import ProductosDAO from "./services/ProductosDAO.js";
import ProductoDTO from "./Classes/ProductoDTO.class.js";

const objDAO = new ProductosDAO();

console.log(await objDAO.guardar({name : "Star Wars Lava Lamp", description : "20inch red lava", price : 200 }));
console.log(await objDAO.guardar({name : "Laptop", description : "Razer Blade 14inch", price : 600 }));
console.log(await objDAO.listarAll());

const objDTO = new ProductoDTO();