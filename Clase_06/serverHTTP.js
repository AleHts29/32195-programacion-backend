const http = require('http')

const getMensaje = () => {
    const horaActual = new Date().getHours();
    if (horaActual >= 6 && horaActual <= 12) {
        return ('Buenos dias!!')
    }
    else if (horaActual >= 13 && horaActual <= 19) {
        return ('Buenas tardes!!')
    }
    else {
        return ('buenas noches!!')
    }
}


const server = http.createServer((peticion, respuesta) => {
    // respuesta.end(`Hola desde el back!!`)
    respuesta.end(getMensaje())
})

const connectedServer = server.listen(8090, () => {
    console.log(`server http escuchando en el puerto 8080`);
})