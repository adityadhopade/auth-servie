import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { HttpError } from 'http-errors';
import { logger } from './config/logger';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the api-auth server');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
