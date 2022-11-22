// Configuracion del server
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()

// configuracion de socket
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


const mensajes = []

// middleware
app.use(express.static('public'));

// 01_ establecer conexion con el cliente
io.on('connection', socket => {
    // _01
    socket.emit('mensajes', mensajes)

    // escucha del mensaje
    socket.on('mensaje', data => {
        // 1ero 
        // io.sockets.emit('mensajes', data)

        // 03
        mensajes.push({ socketid: socket.id, mensaje: data })
        io.sockets.emit('mensajes', mensajes)
    })




})




const PORT = 8070

const server = httpServer.listen(PORT, () => {
    console.log(`server running`);
})

server.on('error', error => console.log(`Error en servidor ${error}`))

