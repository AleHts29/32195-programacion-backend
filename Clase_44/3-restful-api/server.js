/*============================[Modulos]============================*/
import express from 'express';
import cors from 'cors';
import { config } from './src/config/config.js';
import logger from './src/config/loggers.js';
import routerNoticias from './src/routes/noticias.routes.js';
//GraphQL modules
import { graphqlHTTP } from 'express-graphql';
import NoticiaSchema from './src/graphql/schema.js';
import { obtenerNoticias } from './src/graphql/resolvers.js';

const app = express();

/*============================[Middlewares]============================*/
app.use(express.static('public'));
app.use(express.json());

/****  Configurando el cors de forma dinamica */
if(config.server.NODE_ENV == 'development') {
    app.use(cors())
} else {
    app.use(cors({
        origin: 'http://localhost:5000',
        optionsSuccessStatus: 200,
        methods: "GET, PUT, POST"
    }));
}

/*============================[Rutas]============================*/
app.get('/healthcheck', (req, res)=>{
    res.send('Server ok!!!!')
});

app.use('/api/v1/noticias', routerNoticias);

app.use('/api/graphql', graphqlHTTP({
    schema: NoticiaSchema,
    rootValue: {
        obtenerNoticias
    },
    graphiql: true,
}));

/*============================[Servidor]============================*/
// logger.info(config);
const PORT = config.server.PORT;
const server = app.listen(PORT, ()=>{
    logger.info(`Servidor [${config.server.NODE_ENV}] en puerto ${PORT}`)
    // console.log(`Servidor [${config.server.NODE_ENV}] en puerto ${PORT}`);
})
server.on('error', error=>{
    logger.error(`Error en el servidor ${error}`);
});