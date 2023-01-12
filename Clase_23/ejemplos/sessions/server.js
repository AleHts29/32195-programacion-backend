const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'secret',
    resave: false, // evita que la sesion se cree de vuelta
    saveUninitialized: false // si no ha iniciado la sesion no se guarda
}))

app.get('/session', (req, res) => {

    if (req.session.contador) {
        req.session.contador++
        res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
    }
    else {
        req.session.contador = 1;
        res.send('Bienvenido!');
    }
})

app.get('/login', (req, res) => {
    const { username, password } = req.query;

    if (username !== 'ale' || password !== 'ale123') {
        return res.send('Logout Failed')
    }
    req.session.user = username;
    req.session.admin = true;
    res.send('Login success!!')
})




function auth(req, res, next) {
    if (req.session?.user === 'ale' && req.session?.admin) {
        return next()
    }
    return res.status(401).send('Error de autenticacion')
}


app.get('/private', auth, (req, res) => {
    res.send('Si estas viendo esta pagina estas logueado y sos Admin')
})




app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.json({ status: 'Logout Error', body: err })
        } else {
            res.send('Logout ok!!')
        }
    })
})

app.listen(8082)