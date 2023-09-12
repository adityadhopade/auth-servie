import winston from 'winston';
import { CONFIG } from '.';
export const logger = winston.createLogger({
    level: CONFIG.LOG_LEVEL,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    defaultMeta: { service: 'authservice' },
    transports: [
        new winston.transports.File({
            dirname: 'logs',
            filename: 'application.log',
            silent: CONFIG.ENVIRONMENT === 'test',
        }),
        new winston.transports.Console({
            silent:
                CONFIG.ENVIRONMENT === 'production' ||
                CONFIG.ENVIRONMENT === 'test',
        }),
    ],
});
