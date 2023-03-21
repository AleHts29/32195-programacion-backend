class Cotizador {
    static tasas = {
        "USD": 1,
        "ARS": 204,
        "COL": 4.816
    }

    getPrecioSegunMoneda(precio, moneda) {
        switch (moneda) {
            case 'USD':
                return precio * Cotizador.tasas["USD"];
            case 'ARS':
                return precio * Cotizador.tasas["ARS"];
            case 'COL':
                return precio * Cotizador.tasas["COL"];
            default:
                break;
        }
    }
}

export default Cotizador;