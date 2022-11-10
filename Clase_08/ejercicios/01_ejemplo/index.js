const express = require('express')
const { Router } = express;

const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))


const routerMascotas = new Router()
const routerPersonas = new Router()

// configuramos los routes
// Mascotas
// almacenamos en memoria
const mascotas = []

routerMascotas.get('/', (req, res) => {
    res.json({ mascotas: mascotas })
})
routerMascotas.post('/', (req, res) => {
    console.log('ingresar la mascota');
    mascotas.push(req.body)
    res.json('se guardo la mascota!')
})



// Personas
const personas = []

routerPersonas.get('/', auth, (req, res) => {
    res.json({ personas: personas })
})
routerPersonas.post('/', (req, res) => {
    console.log('ingresar la personas');
    personas.push(req.body)
    res.json('se guardo la personas!')
})


// ruta raiz
app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)



app.listen(8090, () => {
    console.log('server ok');
})