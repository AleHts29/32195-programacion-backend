import express from 'express';


const app = express();
const PORT = parseInt(process.argv[2]) || 8080



app.get('/api/fyh', (req, res) => {
    res.send(`Servidor --NGINX-- en el puerto: ${PORT} - <b>PID ${process.pid}</b>- ${new Date().toLocaleString()}`)
})


app.get('/api/calculo-bloq', (req, res) => {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += i;
    }
    res.send(`suma: ${suma} -- puerto: ${PORT} - PID ${process.pid}`);
});


app.listen(PORT, () => {
    console.log(`Server express escuchando en el puerto ${PORT} - PID Worker ${process.pid}`);
})

/*
ENGINX
- Configuracion de upstream:
    upstream node_app{
        server 127.0.0.1:8081;
        server 127.0.0.1:8082;
        server 127.0.0.1:8083 weight=4;
    }
    
- Configuracion de location:
    location /fyh {
        proxy_pass http://node_app;
    }
*/