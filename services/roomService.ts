// @ts-ignore
import roomRepo, { Room } from '../repositories/roomRepo.ts';

export const getRooms = async () => {
  const rooms = await roomRepo.selectAll();

  return rooms;
};
