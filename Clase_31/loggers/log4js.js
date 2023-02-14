const log4js = require('log4js');


// realizar configuracion - 2 propiedades: appenders y las categorias
log4js.configure({

    appenders: {
        myLoggerConsole: { type: "console" },
        myLoggerFile: { type: 'file', filename: 'info.log' },
        myLoggerFile2: { type: 'file', filename: 'info2.log' }
    },

    categories: {
        default: { appenders: ['myLoggerConsole'], level: 'trace' },
        console: { appenders: ['myLoggerConsole'], level: 'debug' },
        archivo: { appenders: ['myLoggerFile'], level: 'warn' },
        archivo2: { appenders: ['myLoggerFile2'], level: 'info' },
        all: { appenders: ['myLoggerConsole', 'myLoggerFile2'], level: 'error' },
    }
})


//**** Niveles **** //
// trace
// debug
// info
// warn
// error
// fatal


const logger = log4js.getLogger("archivo2")

logger.trace('Logger trace')
logger.debug("Logger debug");
logger.info("Logger info");
logger.warn("Logger warn");
logger.error("Logger error");
logger.fatal("Logger fatal");