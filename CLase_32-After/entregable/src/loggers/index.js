import log4js from 'log4js'

log4js.configure({
    appenders: {
        miLoggerConsole: { type: "console" },
        miLoggerFileWarn: { type: 'file', filename: './LOGS/warn.log' },
        miLoggerFileError: { type: 'file', filename: './LOGS/error.log' }
    },
    categories: {
        default: { appenders: ["miLoggerConsole"], level: "trace" },
        info: { appenders: ["miLoggerConsole"], level: "info" },
        warn: { appenders: ["miLoggerConsole", "miLoggerFileWarn"], level: "warn" },
        error: { appenders: ["miLoggerConsole", "miLoggerFileError"], level: "error" }
    }
})

const loggerInfo = log4js.getLogger('info')
const loggerWarn = log4js.getLogger('warn')
const loggerError = log4js.getLogger('error')


export function logInfo(msj) {
    loggerInfo.info(msj)
}

export function logWarning(msj) {
    loggerWarn.warn(msj)
}

export function logError(msj) {
    loggerError.error(msj)
}