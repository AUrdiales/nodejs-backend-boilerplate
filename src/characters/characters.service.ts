import { Data } from './characters.model';

export function getAllCharacters(): Promise<Data> {
    return new Promise(resolve => {
        resolve({
            data: 'data',
        });
    });
}
