// @ts-ignore
import { getRooms } from '../../services/roomService.ts';
// @ts-ignore
import { Context } from 'https://deno.land/x/oak/mod.ts';

export default async ({ response }: Context) => {
  response.body = await getRooms();
};
