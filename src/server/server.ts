import { log } from 'util';
import express, { Express, Router } from 'express';
import { setRouter } from './router';

process.on('uncaughtException', (error: Error) => {
    log(error as any);
    process.exit(1);
});

process.on('unhandledRejection', (error: Error) => {
    log(error as any);
    process.exit(1);
});

export async function server(): Promise<Express> {
    const app = express();
    const router: Router = await setRouter();
    app.use(router);
    log('starting setup...');

    return app;
}
