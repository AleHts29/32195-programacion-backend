// aqui va la configuracion del socket del lado del cliente
const socket = io.connect();

// _02 Escuchamos el mensaje que viene del server
socket.on('mi mensaje', data => {
    alert(data);

    // 03_ enviamos mensaje al server
    socket.emit('notificacion', 'Mensaje recibido exitosamente!!')
})
