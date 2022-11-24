const express = require('express');
const { Server: HttpServer } = require('http')
const { Server: IO } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IO(httpServer)


// middleware
app.use(express.static('./public'))


const PORT = 8080

const messages = [
    { author: 'Pablo', text: 'Hola, que tal?' },
    { author: 'Marcelo', text: 'Muy bien y vos??' },
    { author: 'Belen', text: 'Hola!!' }
]


// implementacion/configuiracion de socket
io.on('connection', socket => {
    console.log('Nuevo cliente conectado!!');


    // vamos a enviar el historial del chat cuando un nuevo cliente se conecte
    socket.emit('message', messages)

    // escuchamos al cliente
    socket.on('new-message', data => {
        messages.push(data)

        // re enviamos por medio broadcast los msn a todos los clientes que esten conectados en ese momento
        io.sockets.emit('message', messages)
    })


})



httpServer.listen(PORT, () => {
    console.log(`server run on PORT: ${PORT}`);
})