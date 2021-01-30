// @ts-ignore
import { createPlayer, getPlayer } from '../../services/playerService.ts';
// @ts-ignore
import { Context } from 'https://deno.land/x/oak/mod.ts';

export default async ({ request, response }: Context) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: 'Invalid player data' };
    return;
  }
  const { name } = await request.body().value;

  if (!name) {
    response.status = 422;
    response.body = { msg: 'Incorrect player data. Name is required' };
    return;
  }
  const data = await createPlayer({ name });
  const playerId: any = data.lastInsertId;
  const player = await getPlayer(playerId);
  response.body = player[0];
};
