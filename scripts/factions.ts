import { Faction } from '../src/main/server/graphql/generated';
import { FactionDetail } from '../src/main/server/entities/FactionDetail';
import { Repository } from 'typeorm';
import { Image } from '../src/main/server/entities/Image';

const createFactions: (
  imageRepo: Repository<Image>,
) => Promise<FactionDetail[]> = async (imageRepo) => [
  {
    name: Faction.Human,
    image: await imageRepo.findOneOrFail({ name: 'HumanFaction' }),
    units: [],
  },
  {
    name: Faction.Orc,
    image: await imageRepo.findOneOrFail({ name: 'OrcFaction' }),
    units: [],
  },
  {
    name: Faction.Undead,
    image: await imageRepo.findOneOrFail({ name: 'UndeadFaction' }),
    units: [],
  },
  {
    name: Faction.NightElf,
    image: await imageRepo.findOneOrFail({ name: 'NightElfFaction' }),
    units: [],
  },
  {
    name: Faction.Neutral,
    image: await imageRepo.findOneOrFail('BTNGolemStormBolt-Reforged.png'),
    units: [],
  },
  {
    name: Faction.Misc,
    image: await imageRepo.findOneOrFail('BTNSelectHeroOn-Reforged.png'),
    units: [],
  },
];

export default createFactions;
