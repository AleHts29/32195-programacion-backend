const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

const PORT = 8070

const pets = [
    { name: 'Samy', organization: 'DigitalOcean', year: 2011 },
    { name: 'Tux', organization: 'Linux', year: 1991 },
    { name: 'Moby', organization: 'Docker', year: 2013 }
]

const tagLine = 'El concepto de programacion sin una mascota no esta bueno!!'


app.get('/', (req, res) => {
    res.render('pages/index', { pets, tagLine })
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})



app.listen(PORT, () => {
    console.log('Server ok!!');
})