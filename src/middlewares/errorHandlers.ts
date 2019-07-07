import { Request, Response, NextFunction, Router } from 'express';

import { clientError, notFoundError, serverError } from '../utils';

function handle404Error(router: Router) {
    router.use(() => {
        notFoundError();
    });
}

function handleClientError(router: Router) {
    router.use((err: Error, req: Request, response: Response, next: NextFunction) => {
        clientError(err, response, next);
    });
}

function handleServerError(router: Router) {
    router.use((err: Error, request: Request, response: Response) => {
        serverError(err, response);
    });
}

export default [handle404Error, handleClientError, handleServerError];
