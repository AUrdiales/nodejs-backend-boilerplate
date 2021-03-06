import { promisify } from 'util';
import { readdir, statSync } from 'fs';

const readdirAsync = promisify(readdir);

export async function recursiveReaddir(
    path: string,
    regexString?: string,
    initialFileList?: string[],
): Promise<string[]> {
    let fileList: string[] = initialFileList || [];
    const regex = new RegExp(regexString);

    const files = await readdirAsync(path);
    for (const file of files) {
        if (statSync(`${path}/${file}`).isDirectory()) {
            fileList = await recursiveReaddir(`${path}/${file}/`, regexString, fileList);
        } else {
            if (regex.test(file)) {
                fileList.push(`${path}${file}`);
            }
        }
    }

    return fileList;
}
