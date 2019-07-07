import { Router } from 'express';
import { resolve } from 'path';
import { recursiveReaddir } from './recursiveReadDir';

export async function unifyRoutes() {
    const files = await recursiveReaddir(resolve(__dirname, '../'), '.*.controller.ts');
    let controllers = [];
    for (let file of files) {
        controllers.push(require(file).default);
    }
    return controllers;
}

export async function applyRoutes(router: Router): Promise<void> {
    const routesFn = await unifyRoutes();
    for (const fn of routesFn) {
        fn(await router);
    }
}
