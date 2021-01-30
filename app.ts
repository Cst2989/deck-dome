// @ts-ignore
import { Application } from 'https://deno.land/x/oak/mod.ts';
// @ts-ignore
import { APP_HOST, APP_PORT } from './config.ts';
// @ts-ignore
import router from './routes.ts';
// @ts-ignore
import _404 from './controllers/404.ts';
// @ts-ignore
import errorHandler from './controllers/errorHandler.ts';
// @ts-ignore
import { oakCors } from 'https://deno.land/x/cors/mod.ts';

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);
// @ts-ignore
await app.listen(`${APP_HOST}:${APP_PORT}`);
