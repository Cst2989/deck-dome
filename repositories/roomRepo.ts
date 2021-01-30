// @ts-ignore
import client from '../db/database.js';

export type Room = {
  id: number;
  final_state: Object;
  game_ended: boolean;
  options: Object;
};

export const create = async (beer: any) => {
  return true;
};

export const selectAll = () => {
  return client.query('SELECT * FROM rooms ORDER BY id');
};

export const selectById = (id: string) => {
  return '1';
};

export const update = async (id: string, beer: Room) => {
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
