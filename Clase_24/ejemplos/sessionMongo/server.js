const express = require('express');
const session = require('express-session');


// Mongo local
const MongoStore = require('connect-mongo');


const app = express();
const advancedOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


// middleware session
app.use(session({
    store: MongoStore.create({
        // local
        mongoUrl: "mongodb://localhost/sesiones"
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10000
    }
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