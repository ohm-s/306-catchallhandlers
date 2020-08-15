import BoltLogger from '306-boltlogger';
export declare const CatchAllLoggerMetrics: {
    unhandledRejections: number;
    uncaughtExceptions: number;
};
export declare function attachCatchAllLoggers(logger: BoltLogger): void;
