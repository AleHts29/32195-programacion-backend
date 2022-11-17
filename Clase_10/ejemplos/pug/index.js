const express = require('express')
const app = express()

const PORT = 8070

// --> NO CONFIGURAMOS EL ENGINE!!


app.set('views', './views')
app.set('view engine', 'pug')


app.get('/hello', (req, res) => {
    res.render('hello', { msn: 'Hello pug!! 🐶' })
})





app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})