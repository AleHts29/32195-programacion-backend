import { Router } from 'express'
import config from '../../config'

import path from 'path'

const productosWebRouter = new Router()

productosWebRouter.get('/', (req, res) => {
    res.redirect('/home')
})

productosWebRouter.get('/home', webAuth, (req, res) => {
    res.render(path.join(process.cwd(), '/views/pages/home.ejs'), {
        nombre: req.user.nombre,
        foto: req.user.foto,
        email: req.user.email,
        // getSpecs
    })
})

productosWebRouter.get('/productos-vista-test', (req, res) => {
    res.render(path.join(process.cwd(), '/views/pages/productos-vista-test.ejs'), {
        // getSpecs
    })
})

productosWebRouter.get('/info', (req, res) => {
    // getSpecs

    // console.log({
    //     entryArguments: JSON.stringify(args, null, 2),
    //     executionPath: process.execPath,
    //     platform: process.platform,
    //     processId: process.pid,
    //     nodeVersion: process.version,
    //     projectFile: process.cwd(),
    //     rss: JSON.stringify(process.memoryUsage(), null, 2),
    //     cpuNums: numeroCPUs,
    // });
    // res.render('info', {
    //     entryArguments: JSON.stringify(args, null, 2),
    //     executionPath: process.execPath,
    //     platform: process.platform,
    //     processId: process.pid,
    //     nodeVersion: process.version,
    //     projectFile: process.cwd(),
    //     rss: JSON.stringify(process.memoryUsage(), null, 2),
    //     cpuNums: numeroCPUs,
    // });

    res.render(path.join(process.cwd(), '/views/pages/info.ejs'), {
        specs: config.getSpecs()
    })


})

function webAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/login')
    }
}

export default productosWebRouter