class ProductoDTO {
    constructor(datos, cotizaciones) {
        this.nombre = datos.name;
        this.descripcion = datos.description;
        this.precio = datos.price;

        for (const [denominacion, valor] of Object.entries(cotizaciones)) {
            this[denominacion] = valor
        }
    }
}

export default ProductoDTO;