import { ConnectionOptions } from 'typeorm';
import { Ability } from './server/entities/Ability';
import { FactionDetail } from './server/entities/FactionDetail';
import { Unit } from './server/entities/Unit';
import { Image } from './server/entities/Image';
import { Unability } from './server/entities/Unability';

export const dbOptions: (
  dbPath: string,
  isDev: boolean,
) => ConnectionOptions = (dbPath, isDev) => ({
  type: 'sqlite',
  database: dbPath,
  entities: [FactionDetail, Ability, Unit, Image, Unability],
  synchronize: isDev,
  logging: isDev,
});
