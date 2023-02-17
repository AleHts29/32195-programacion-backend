import { Router } from 'express'
import { calcular } from '../../api/randoms.js'
// logError

const randomsApiRouter = new Router()

randomsApiRouter.get('/randoms', async (req, res, next) => {
    const { cant = 100_000_000 } = req.query
    try {
        const result = await calcular(cant)
        res.json(result)
    } catch (error) {
        // logError
        next(error)
    }
})

export default randomsApiRouter