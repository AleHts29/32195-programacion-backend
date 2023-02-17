const express = require('express');
const cluster = require('cluster');
const { cpus } = require('os')


const PORT = parseInt(process.argv[2]) || 8080;
// node indexe.js 8080 CLUSTER
const modoCluster = process.argv[3] == "CLUSTER"


// funcion para realizar el test de carga - esta funcion simplemente me dice si un numero es primo o no. 
function isPrime(num) {
    if ([2, 3].includes(num)) return true;
    else if ([2, 3].some((n) => num % n == 0)) return false;
    else {
        let i = 5,
            w = 2;
        while (i ** 2 <= num) {
            if (num % i == 0) return false;
            i += w;
            w = 6 - w;
        }
    }
    return true;
}



if (modoCluster && cluster.isMaster) {

    const numCPUs = cpus().length;

    for (let i = 0; i < numCPUs; i++) {
        // Con fork creamos un proceso para cada nucleo
        cluster.fork();
    }

    // si falla algun procesos lo vuelve a ejhercutar
    cluster.on("exit", (worker) => {
        console.log(
            "Worker",
            worker.process.pid,
            "died",
            new Date().toLocaleString()
        );
        cluster.fork();
    });
} else {
    const app = express();
    // Creamos una ruta para hacer un test de carga - para esto vamos a usar Artillery
    // Vamos a generar dos archivos: uno para ver el rendimiento en modo fork y otro para ver el rendimiento en modo cluster
    app.get("/", (req, res) => {
        const primes = [];

        const max = Number(req.query.max) || 1000;
        for (let i = 1; i <= max; i++) {
            if (isPrime(i)) primes.push(i);
        }
        res.json(primes);
    });

    app.listen(PORT, () => {
        console.log(`Servidor express escuchando en el puerto ${PORT}`);
        console.log(`PID WORKER ${process.pid}`);
    });
}


/*
En mac se debe instalar Artillery en modo administrador y de forma global

❯ sudo su
Password:
sh-3.2# npm i -g artillery

*/