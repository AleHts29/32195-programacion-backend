const express = require('express');
const app = express();
const routerProducto = require('./src/routes/products.Route.js')

const PORT = 8080
app.use(express.json())

app.use('/api', routerProducto)


app.listen(PORT, () => {
    console.log("Server ok");
})