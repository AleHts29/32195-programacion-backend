// aqui va la configuracion del socket del lado del cliente
const socket = io.connect();

const input = document.querySelector('input')

// input.addEventListener('input', () => {
//     socket.emit('mensaje', input.value)
// })

// socket.on('mensajes', data => {
//     document.querySelector('p').innerHTML = data
// })

document.querySelector('button').addEventListener('click', () => {
    socket.emit('mensaje', input.value)
})

socket.on('mensajes', msjs => {
    const mensajesHTML = msjs.map(msj => `SocketID: ${msj.socketid} --> Mensaje: ${msj.mensaje}`).join('<br>')

    document.querySelector('p').innerHTML = mensajesHTML
})