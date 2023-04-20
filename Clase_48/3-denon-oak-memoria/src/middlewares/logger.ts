import { logger } from "../../deps.ts";

await logger.setup({
    handlers: {
        console: new logger.handlers.ConsoleHandler("DEBUG", {
            formatter: "{datetime} {levelname} {msg}"
        })
    },
    loggers: {
        default: {
            level: "DEBUG",
            handlers: ["console"]
        },
        prod: {
            level: "WARNING",
            handlers: ["console"]
        }
    }
});

export default logger.getLogger();