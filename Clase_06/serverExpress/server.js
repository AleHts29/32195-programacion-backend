const express = require('express')

const app = express()
const PORT = 8090



let visitas = 0

app.get('/', (req, res) => {
    res.send(`<h1 style='color:blue'> Hola Mundo</h1>`)
})


app.get('/visitas', (req, res) => {
    visitas += 1
    res.send(`La cantidad de visitas es: ${visitas}`)
})


app.get('/fyh', (req, res) => {
    const date = new Date
    res.send(date.toLocaleString())
})


// Configuramos el puerto.
const server = app.listen(PORT, () => {
    console.log(`servidor express escuchando en el pto: ${PORT}`);
})

// Escuchamos un evento en caso de error
server.on('error', error => console.log(`Error en servidor ${error}`))