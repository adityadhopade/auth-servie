import { CONFIG } from './src/config';
import app from './src/app';

const PORT = CONFIG.PORT || 8000;

const startServer = async (port: number) => {
    try {
        app.listen(port, () => {
            // console.log(`Listening on PORT ${port}`);
        });
    } catch (err: unknown) {
        // console.log(`Something went wrong`, err);
    }
};

startServer(PORT as number);
