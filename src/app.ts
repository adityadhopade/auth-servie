import express, { Request, Response } from 'express';
import cors from 'cors';
import { HttpError } from 'http-errors';
import { logger } from './config/logger';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the api-auth server');
});

app.use((err: HttpError, req: Request, res: Response) => {
    logger.error(err.message);
    res.status(err.statusCode).json({
        name: err.name,
        statusCode: err.statusCode,
        message: err.message,
        details: [],
    });
});

export default app;
