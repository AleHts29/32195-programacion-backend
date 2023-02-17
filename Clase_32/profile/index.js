const express = require('express')
const crypto = require('crypto')

const app = express()
const PORT = parseInt(process.argv[2]) || 8080;

// my DB
const users = {}


app.get('/', (req, res) => {
    res.json({ users })
})


// _01
app.get('/newUser', (req, res) => {
    let userName = req.query.userName || "";
    const password = req.query.password || "";

    // Aplico una exp-Regular para eliminar caracteres extraños
    userName = userName.replace(/[!@#$%^&*]/g, "");

    // Evaluo si el user y password existen
    if (!userName || !password || users[userName]) {
        return res.sendStatus(400);
    }


    // Encryptacion de la contrasena
    // crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
    const salt = crypto.randomBytes(128).toString('base64')
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512')

    // damos de alta al user en la DB
    users[userName] = { salt, hash }

    res.sendStatus(200)
})


// _02 - nos creamos dos rutas: 

// ********** LOGIN BLOQUEANTE *************** //
app.get("/auth-bloq", (req, res) => {
    let userName = req.query.userName || "";
    const password = req.query.password || "";

    // Aplico una exp-Regular para eliminar caracteres extraños
    userName = userName.replace(/[!@#$%^&*]/g, "");

    // Evaluo si el user y password existen
    if (!userName || !password || !users[userName]) {
        process.exit(1);
    }

    // esta fraccion de codigo es lo que hace que mi ruta sea bloqueante - porque es sincronica
    const { salt, hash } = users[userName];
    const encrypHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

    // Evaluo condicion que me indica si esta o no registrado el usuario
    if (crypto.timingSafeEqual(hash, encrypHash)) {
        res.sendStatus(200);
    } else {
        process.exit(1);
    }
});

// ********** LOGIN NO-BLOQUEANTE *************** //
app.get("/auth-nobloq", (req, res) => {
    let userName = req.query.userName || "";
    const password = req.query.password || "";

    // Aplico una exp-Regular para eliminar caracteres extraños
    userName = userName.replace(/[!@#$%^&*]/g, "");

    // Evaluo si el user y password existen
    if (!userName || !password || !users[userName]) {
        process.exit(1);
    }

    const { salt } = users[userName];

    // la desencriptacion la hacemos de modo asincronica - esto hace que mi ruta no sea bloqueante
    crypto.pbkdf2(password, salt, 10000, 512, "sha512", (err, hash) => {
        if (users[userName].hash.toString() === hash.toString()) {
            res.sendStatus(200);
        } else {
            process.exit(1);
        }
    });
});



app.listen(PORT, () => {
    console.log(`Server run - ${PORT}`);
})


/*
--> hago la peticion por medio de curl y doy de alta un usuario
curl -X GET "http://localhost:8080/newUser?userName=mario&password=qwert123"

--> Me fijo si se creo el usuario
curl -X GET "http://localhost:8080"

--> Ejecuto Artillery en ruta bloqueante
artillery quick --count 10 -n 50 "http://localhost:8080/auth-bloq?userName=mario&password=qwert123" > result_bloq.txt

--> Ejecuto Artillery en ruta No bloqueante
artillery quick --count 10 -n 50 "http://localhost:8080/auth-nobloq?userName=mario&password=qwert123" > result_nobloq.txt


--> Ejecutamos app en modo PROFILE
node --prof index.js

--> Paso los isolates a un archivo mas legible 
node --prof-process isolate-bloq-v8.log > result_prof-bloq.txt
node --prof-process isolate-nobloq-v8.log > result_prof-nobloq.txt
*/