const express = require('express')

const { Router } = express
const app = express()


// Middleware
function mdl1(req, res, next) {
    console.log(req.query.rol);
    req.miAporte1 = 'data por mdl1'
    if (req.query.rol !== "admin") {
        res.status(500).send('usuario no autorizado!!')
    }
    next()
}


function mdl2(req, res, next) {
    req.miAporte2 = 'data por mdl2'
    next()
}




// Router
const router = new Router()

router.get('/ruta1', mdl1, (req, res) => {
    let miAporte = req.miAporte1
    res.send({ miAporte })
})


router.get('/ruta2', mdl2, (req, res) => {
    let miAporte = req.miAporte2
    res.send({ miAporte })
})


app.use('/api', router)



app.listen(8060, () => {
    console.log(`Server ok!`);
})