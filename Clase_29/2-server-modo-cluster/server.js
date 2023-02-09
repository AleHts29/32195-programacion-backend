import express from 'express';
import cluster from 'cluster';
import os from 'os';

const app = express();
const CPU_CORES = os.cpus().length;




if (cluster.isPrimary) {
    // voy a crear procesos hijos
    console.log('Cant de cores: ', CPU_CORES);

    // Levantamos un subproceso por cada uno de los cores
    for (let i = 0; i < CPU_CORES; i++) {
        cluster.fork()
    }

    // escuchar el evento exit cuando se finalizan los procesos
    cluster.on('exit', worker => {
        console.log(`Worker ${process.pid} ${worker.id} ${worker.pid} finalizo ${new Date().toLocaleString()}`);

        // Podemos crear una redundancia, levantando nuevamente un proceso en dado caso de que se finalice
        cluster.fork();
    })


} else {
    const PORT = parseInt(process.argv[2]) || 8080;

    app.get('/', (req, res) => {
        res.send(`Server en puerto ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`)
    })


    app.listen(PORT, err => {
        if (!err) console.log(`Servidor express escuchando en el puerto: ${PORT} - PID Worker: ${process.pid}`);
    })
}