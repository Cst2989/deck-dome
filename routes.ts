// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts';
// @ts-ignore
import getRooms from './controllers/getRooms.ts';

const router = new Router();

router.get('/rooms', getRooms);

export default router;
