// @ts-ignore
import client from '../db/database.js';

export type Player = {
  id?: number;
  name: string;
};

export const create = async (player: any) => {
  let result = await client.execute(`INSERT INTO players(name) values(?)`, [
    player.name,
  ]);
  return result;
};

export const selectAll = () => {
  return client.query('SELECT * FROM players ORDER BY id');
};

export const selectById = async (id: number) => {
  return client.query('SELECT * from players WHERE id = ?', [id]);
};

export const update = async (id: string, player: Player) => {
  return true;
};

export const deleteBeer = (id: string) => {
  return true;
};

export default {
  create,
  selectAll,
  selectById,
  update,
  deleteBeer,
};
