const express = require('express');
const compression = require('compression');
require('dotenv').config();


const app = express();
app.use(compression())


app.get('/', (req, res) => {

    if (process.env.NODE_ENV === 'prod') {
        return res.send("Hola Mundo".repeat(10000))
    }
    res.send('Hola Mundo')
})


app.listen(8080, () => {
    console.log(`Server ok!!`);
})