import { Repository } from 'typeorm';
import { Unability } from '../src/main/server/entities/Unability';
import { Image } from '../src/main/server/entities/Image';
const createUnabilities: (
  imageRepo: Repository<Image>,
) => Promise<Unability[]> = async (imageRepo) => [
  {
    id: 'amic',
    name: 'Back to Work',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBacktoWork-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'abrf',
    name: 'Night Elf Form',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDruidOfTheClaw-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'arav',
    name: 'Night Elf Form',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDruidOfTheTalon-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'anrg',
    name: 'Revert to Tinker Form',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroTinker-Reforged.png',
    }),
    ordering: 8,
  },
];
export default createUnabilities;
