import productosApi from '../../api/productos.js'
import { logError } from '../../loggers/index.js'

async function manejarEnvíoDeProductos() {
    try {
        const productos = await productosApi.listarAll();
        return productos
    } catch (error) {
        logError(error.message)
        return []
    }
}

export default async function configurarSocket(socket, sockets) {
    socket.emit('productos', await manejarEnvíoDeProductos());

    socket.on('update', async producto => {
        try {
            await productosApi.guardar(producto)
        } catch (error) {
            logError(`error al guardar producto:

${error.message}`)
        }

        sockets.emit('productos', await manejarEnvíoDeProductos());
    })
}