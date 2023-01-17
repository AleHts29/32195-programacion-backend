// Funciona con la version de redis --> redis@3.0.2 connect-redis@5.1.0
const express = require('express');
const session = require('express-session');

// redis Local
// const redis = require('redis');
// const client = redis.createClient();
// const connectRedis = require('connect-redis');
// const RedisStore = connectRedis(session);



// Redis Cloud
const redis = require('redis');
const client = redis.createClient(14253, 'redis-14253.c10.us-east-1-4.ec2.cloud.redislabs.com');

client.auth('EIiT8UJZ67IieOjzClAndfXfkUfhjKBu', (err) => {
    if (err) throw err;
});

const connectRedis = require('connect-redis');
const RedisStore = connectRedis(session);


const app = express();

// middleware session
app.use(session({
    store: new RedisStore({
        // client: 'localhost',
        // port: 6379,
        client: client,
        ttl: 60, // tiempo de vida en segundos,
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