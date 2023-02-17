import express from 'express'
import session from 'express-session'
import passport from 'passport'

// Compression
import compression from 'compression'

// loggers
import { logInfo, logError, logWarning } from './loggers/index.js'

import config from './config.js'

import { Server as HttpServer } from 'http'
import { Server as Socket } from 'socket.io'

import authWebRouter from './routers/web/auth.js'
import homeWebRouter from './routers/web/home.js'
import productosApiRouter from './routers/api/productos.js'
import randomsApiRouter from './routers/api/randoms.js'

import addProductosHandlers from './routers/ws/productos.js'
import addMensajesHandlers from './routers/ws/mensajes.js'





function createServer() {

    //--------------------------------------------
    // instancio servidor, socket y api

    const app = express()
    const httpServer = new HttpServer(app)
    const io = new Socket(httpServer)

    //--------------------------------------------
    // configuro el socket

    io.on('connection', async socket => {
        // console.log('Nuevo cliente conectado!')
        addProductosHandlers(socket, io.sockets)
        addMensajesHandlers(socket, io.sockets)
    })

    //--------------------------------------------
    // configuro el servidor

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/static', express.static('public'))

    app.set('view engine', 'ejs')
    app.set('views', './views')

    app.use(session(config.session))

    app.use(passport.initialize())
    app.use(passport.session())

    app.use(compression())

    //--------------------------------------------
    // logging general
    app.use((req, res, next) => {
        logInfo(`${req.method} ${req.url}`)
        next()
    })


    //--------------------------------------------
    // logging casos no manejados
    app.use('*', (req, res, next) => {
        logWarning(`${req.method} ${req.originalUrl} - ruta inexistente!!`)
        next()
    })



    //--------------------------------------------
    // rutas del servidor API REST

    app.use('/api', productosApiRouter)
    app.use('/api', randomsApiRouter)

    //--------------------------------------------
    // rutas del servidor web

    app.use(authWebRouter)
    app.use(homeWebRouter)







    //--------------------------------------------

    return {
        listen: port => new Promise((resolve, reject) => {
            const connectedServer = httpServer.listen(port, () => {
                resolve(connectedServer)
            })
            connectedServer.on('error', error => {
                reject(error)
            })
        })
    }
}

export { createServer }
