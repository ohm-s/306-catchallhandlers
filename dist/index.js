"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCatchAllLoggers = exports.CatchAllLoggerMetrics = void 0;
exports.CatchAllLoggerMetrics = {
    unhandledRejections: 0,
    uncaughtExceptions: 0,
};
function attachCatchAllLoggers(logger) {
    process.on('unhandledRejection', (reason, promise) => {
        logger.rawerror(reason, { extra: 'unhandledRejection' });
        exports.CatchAllLoggerMetrics.unhandledRejections++;
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => {
        logger.error({ error: err, errorOrigin: origin });
        logger.rawerror(err, { extra: 'uncaughtExceptionMonitor' });
    });
    process.on('uncaughtException', (err, origin) => {
        logger.error({ error: err, errorOrigin: origin });
        logger.rawerror(err, { extra: 'uncaughtException' });
        exports.CatchAllLoggerMetrics.uncaughtExceptions++;
    });
}
exports.attachCatchAllLoggers = attachCatchAllLoggers;
