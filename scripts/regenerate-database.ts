import { createConnection, ConnectionOptions } from 'typeorm';
import path from 'path';
import { FactionDetail } from '../src/main/server/entities/FactionDetail';
import fs from 'fs-jetpack';
import { scrapeReforgedIcons } from './scrape-reforged-icon-urls';
import { Ability } from '../src/main/server/entities/Ability';
import createFactions from './factions';
import createAbilities from './abilities';
import { Image } from '../src/main/server/entities/Image';
import { Unit } from '../src/main/server/entities/Unit';
import createUnits from './units';
import { Unability } from '../src/main/server/entities/Unability';
import createUnabilities from './unabilities';

new Promise(async (res, rej) => {
  try {
    const imagesIndex = path.join(__dirname, 'images.json');
    if (!fs.exists(imagesIndex)) {
      await scrapeReforgedIcons(imagesIndex);
    }
    const dbOptions: ConnectionOptions = {
      type: 'sqlite',
      database: path.join(__dirname, '..', 'war3keys.sqlite'),
      entities: [FactionDetail, Ability, Unit, Image, Unability],
      synchronize: true,
      logging: true,
    };
    const connection = await createConnection(dbOptions);
    const em = connection.createEntityManager();
    const images: Record<string, string> = JSON.parse(fs.read(imagesIndex)!);
    for (const imageName of Object.keys(images)) {
      await em.getRepository(Image).save({
        name: imageName,
        href: images[imageName],
      });
    }
    for (const faction of await createFactions(em.getRepository(Image))) {
      await em.getRepository(FactionDetail).save(faction);
    }
    for (const unability of await createUnabilities(em.getRepository(Image))) {
      await em.getRepository(Unability).save(unability);
    }
    for (const ability of await createAbilities(em.getRepository(Image))) {
      await em.getRepository(Ability).save(ability);
    }
    for (const unit of await createUnits(
      em.getRepository(Image),
      em.getRepository(Ability),
      em.getRepository(Unability),
      em.getRepository(FactionDetail),
    )) {
      await em.getRepository(Unit).save(unit);
    }
    res();
  } catch (err) {
    rej(err);
  }
});
