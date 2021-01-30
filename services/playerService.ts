// @ts-ignore
import playerRepo, { Player } from '../repositories/playerRepo.ts';

export const createPlayer = async (player: Player) => {
  return await playerRepo.create(player);
};

export const getPlayer = async (playerId: number) => {
  return await playerRepo.selectById(playerId);
};
