const logger = require('pino')()

//trace
//debug
//info
//warn
//error
//fatal



// logger.trace('pino trace')
// logger.debug('pino debug')
// logger.info('pino info')
// logger.warn('pino warn')
// logger.error('pino error')
// logger.fatal('pino fatal')


logger.info('Error %d', 403)
logger.info({ a: 402 }, 'Error objeto')
logger.info({ C: { a: 402 } }, 'Error objeto2')

const child = logger.child({ a: "Pablo" })
child.info('Hola Mundo desde un child')
