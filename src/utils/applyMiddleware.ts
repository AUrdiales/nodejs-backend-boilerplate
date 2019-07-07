import { Router } from 'express';

type Wrapper = (router: Router) => void;

export function applyMiddleware(middlewareFn: Wrapper[], router: Router): void {
    for (const f of middlewareFn) {
        f(router);
    }
}
