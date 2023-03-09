const express = require('express');

const app = express()
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hola Yarn!!")
})


app.listen(PORT, () => {
    console.log(`server run on port: ${PORT}`);
})