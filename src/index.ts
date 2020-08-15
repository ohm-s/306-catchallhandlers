import BoltLogger from '306-boltlogger';

export const CatchAllLoggerMetrics: { unhandledRejections: number; uncaughtExceptions: number } = {
  unhandledRejections: 0,
  uncaughtExceptions: 0,
};

export function attachCatchAllLoggers(logger: BoltLogger) {
  process.on('unhandledRejection', (reason: any, promise: any) => {
    logger.rawerror(reason, { extra: 'unhandledRejection' });
    CatchAllLoggerMetrics.unhandledRejections++;
  });

  process.on('uncaughtExceptionMonitor', (err: any, origin: any) => {
    logger.error({ error: err, errorOrigin: origin });
    logger.rawerror(err, { extra: 'uncaughtExceptionMonitor' });
  });

  process.on('uncaughtException', (err: any, origin: any) => {
    logger.error({ error: err, errorOrigin: origin });
    logger.rawerror(err, { extra: 'uncaughtException' });
    CatchAllLoggerMetrics.uncaughtExceptions++;
  });
}
