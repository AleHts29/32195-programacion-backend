import express from "express";

const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    res.send(`Server en puerto ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`)
})


app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en el puerto: ${PORT} - PID Worker: ${process.pid}`);
})