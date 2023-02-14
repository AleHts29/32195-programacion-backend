const { createLogger, transports } = require('winston');


// configuracion
const logger = createLogger({
    transports: [
        new transports.Console({
            level: 'verbose'
        }),
        new transports.File({
            filename: 'logWinston.log',
            level: 'error'
        }),
    ]
})


// configuro las salidas usando .log
// logger.log('silly', '127.0.0.1 - log silly');
// logger.log('debug', '127.0.0.1 - log debug');
// logger.log('verbose', '127.0.0.1 - log verbose');
// logger.log('http', '127.0.0.1 - log http');
// logger.log('info', '127.0.0.1 - log info');
// logger.log('warn', '127.0.0.1 - log warn');
// logger.log('error', '127.0.0.1 - log error');


// configuro las salidas usando los niveles
logger.silly('127.0.0.1 - log silly');
logger.debug('127.0.0.1 - log debug');
logger.verbose('127.0.0.1 - log verbose');
logger.http('127.0.0.1 - log http');
logger.info('127.0.0.1 - log info');
logger.warn('127.0.0.1 - log warn');
logger.error('127.0.0.1 - log error');