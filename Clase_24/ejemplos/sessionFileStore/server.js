const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session)


const app = express();

// middleware session
app.use(session({
    store: new FileStore({
        path: './sesiones',
        ttl: 60, // tiempo de vida en segundos,
        retries: 3
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    res.send('Servidor express ok!!')
})

app.get('/con-session', (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1;
        res.send('Bienvenido!');
    }
})

app.listen(8080)
console.log('Server on!');