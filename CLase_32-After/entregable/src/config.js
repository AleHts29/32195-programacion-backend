import dotenv from 'dotenv'
import parseArgs from 'minimist'

dotenv.config()

// configuramos las variables que pasamos por CLI - argv
const argv = parseArgs(process.argv.slice(2), {
    alias: {
        p: 'port',
        m: 'mode',
        a: 'auth'
    },
    default: {
        port: 8080,
        mode: 'FORK',
        auth: 'NO_AUTH',
        NODE_ENV: 'PROD'
    }
})

const sessionConfig = {
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
};

function getSpecs() {
    return {
        env: { description: 'entorno de ejecucion', value: argv.NODE_ENV },
        puerto: { description: 'puerto', value: argv.port },
        modo: { description: 'modo', value: argv.mode },
        argumentos: { description: 'argumentos de entrada', value: process.argv.slice(2).join(', ') },
        plataforma: { description: 'plataforma', value: process.platform },
        versionNode: { description: 'version de node', value: process.version },
        memoriaReservada: { description: 'memoria total reservada (MB)', value: parseInt(process.memoryUsage().rss / 1024 / 1024) },
        rutaEjecucion: { description: 'path de ejecucion del entorno', value: process.execPath },
        idProceso: { description: 'id de proceso', value: process.pid },
        directorioProyecto: { description: 'path del proyecto', value: process.cwd() },
    }
}

export default {
    // exportamos
    getSpecs,
    NODE_ENV: argv.NODE_ENV,
    PORT: argv.port,
    mode: argv.mode,
    auth: argv.auth,

    session: sessionConfig,
    mongoLocal: {
        client: 'mongodb',
        cnxStr: process.env.MONGODB_LOCAL
    },
    mongoRemote: {
        client: 'mongodb',
        cnxStr: process.env.MONGODB_REMOTO
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: process.env.SQLITE3
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: process.env.MYSQL
    },
    fileSystem: {
        path: process.env.FILESYSTEM
    },
    facebookClientId: process.env.FACEBOOK_CLIENT_ID,
    facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
}