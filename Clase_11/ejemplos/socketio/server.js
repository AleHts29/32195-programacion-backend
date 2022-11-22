// Configuracion del server
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()

// configuracion de socket
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

// middleware
app.use(express.static('public'));

// 01_ establecer conexion con el cliente
io.on('connection', socket => {
    // _01
    console.log('Nuevo cliente conectado');


    // _02 Enviamos mensajes al cliente
    socket.emit('mi mensaje', 'este es mi mensaje desde el server!!')

    socket.on('notificacion', data => {
        console.log(data);
    })
})




const PORT = 8070

const server = httpServer.listen(PORT, () => {
    console.log(`server running`);
})

server.on('error', error => console.log(`Error en servidor ${error}`))

