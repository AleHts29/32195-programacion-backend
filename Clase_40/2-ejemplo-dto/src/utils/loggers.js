import log4js from 'log4js';
import config from './config.js';
import path from 'path';

log4js.configure({
  appenders: {
    consola: { type: 'console' },
    archivoErrores: { type: 'file', filename: path.join(path.dirname(''), './logs/errors.log') },
    archivoDebug: { type: 'file', filename: path.join(path.dirname(''), './logs/debug.log') },
    //Se difine los niveles
    loggerConsola: { type: 'logLevelFilter', appender: 'consola', level: 'info' },
    loggerArchivoErrores: { type: 'logLevelFilter', appender: 'archivoErrores', level: 'error' },
    loggerArchivoDebug: { type: 'logLevelFilter', appender: 'archivoDebug', level: 'info' }
  },
  categories: {
    default: {
      appenders: ['loggerConsola'], level: 'all'
    },
    prod: {
      appenders: ['loggerArchivoErrores', 'loggerArchivoDebug'], level: 'all'
    }
  }
})

let logger = null

if (config.srv.logger === 'PRD') {
  logger = log4js.getLogger('prod');
} else {
  logger = log4js.getLogger();
}

export default logger;