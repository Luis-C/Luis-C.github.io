import { copyFile } from 'node:fs/promises';

const output = new URL('../dist/luis-hernandez-v22/browser/', import.meta.url);
await copyFile(new URL('index.html', output), new URL('404.html', output));
