/*============================[Modulos]============================*/
import express from "express";
import { fork } from 'child_process';

const app = express();

const forkedProcess = fork('./calculo-bloq.js');



/*============================[Rutas]============================*/
let visitas = 0;
app.get('/', (req, res) => {
    res.send(`Cantidad de visitas: ${++visitas}`);
});

app.get('/calculo-bloq', (req, res) => {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;
    }
    res.send(`suma: ${suma}`);
})

app.get('/calculo-nobloq', (req, res) => {
    forkedProcess.send('INICIA');
    forkedProcess.on('message', msg => {
        console.log('mensaje desde el procesos secundario:');
        console.log(msg);
    });
    res.send('Sometido en segundo plano');
})



/*============================[Servidor]============================*/
const PORT = 4242;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});