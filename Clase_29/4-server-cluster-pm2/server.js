import express from 'express';

const app = express()

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    res.send(`Servidor express en ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`)
})

app.get('/calculo-bloq', (req, res) => {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;
    }
    res.send(`suma: ${suma} PID ${process.pid}`);
});




app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
});