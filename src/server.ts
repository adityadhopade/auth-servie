import { CONFIG } from 'config';
import app from 'app';
import { logger } from './config/logger';

const PORT = CONFIG.PORT || 8000;

const startServer = async (port: number) => {
    try {
        app.listen(port, () => {
            logger.info(`Listening on PORT ${port}`);
        });
    } catch (err: unknown) {
        if (typeof err === 'object' && err !== null && 'message' in err) {
            logger.error(`Soemthing went wrong error ${err.message}`);
        }
    }
};

startServer(PORT as number);
