const express = require('express')
const app = express()

const PORT = 8070

// --> NO CONFIGURAMOS EL ENGINE!!


app.set('views', './views')
app.set('view engine', 'pug')


app.get('/datos', (req, res) => {
    const params = req.query
    res.render('nivel', params)
})





app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})