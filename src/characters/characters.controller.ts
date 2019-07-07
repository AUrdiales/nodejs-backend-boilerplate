import { Router, Request, Response } from 'express';
import { getAllCharacters } from './characters.service';

export async function getCharacters(request: Request, response: Response): Promise<void> {
    response.send(await getAllCharacters());
}

export default async function(router: Router) {
    return router.get('/', await getCharacters);
}
