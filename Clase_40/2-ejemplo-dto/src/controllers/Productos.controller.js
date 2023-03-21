import ProductosDAO from "../services/ProductosDAO.js";
import ProductoDTO from "../Classes/ProductoDTO.class.js";
import Cotizador from "../Classes/Cotizador.class.js";

const PrdDAO = new ProductosDAO();
const cot = new Cotizador();

const ProductosController = {
    async guardar(elemento) {
        return await PrdDAO.guardar(elemento);
    },
    async listarAll(){
        return await PrdDAO.listarAll();
    },
    async listarAllCotizaciones(){
        const docs  = await PrdDAO.listarAll();

        const docsDto = docs.map(producto => {
            const cotizaciones = {
                precioDolar: cot.getPrecioSegunMoneda(producto.price, 'USD'),
                precioARS: cot.getPrecioSegunMoneda(producto.price, 'ARS'),
                precioCOL: cot.getPrecioSegunMoneda(producto.price, 'COL')
            }

            console.log(Object.entries(cotizaciones));

            return new ProductoDTO(producto, cotizaciones);
        })

        return docsDto;
    }
}

export default ProductosController;