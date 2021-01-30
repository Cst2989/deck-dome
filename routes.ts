// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts';
// @ts-ignore
import getRooms from './controllers/room/getRooms.ts';
// @ts-ignore
import createPlayer from './controllers/player/createPlayer.ts';
const router = new Router();

// ROOMS API
router.get('/rooms', getRooms);

// PLAYERS API
router.post('/players', createPlayer);
export default router;
