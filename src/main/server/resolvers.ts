import { Resolvers } from './graphql/generated';
import { EntityManager } from 'typeorm';
import { FactionDetail } from './entities/FactionDetail';
import { Unit } from './entities/Unit';

export const resolvers: (em: EntityManager) => Resolvers = (em) => ({
  Query: {
    Factions: async (parent, args, context, info) => {
      const factionRepo = em.getRepository(FactionDetail);
      const factionDetails = await factionRepo.find({
        relations: ['image'],
      });
      return factionDetails.map((factionDetail) => ({
        ...factionDetail,
        image: factionDetail.image.href,
      }));
    },
    Units: async (parent, args, context, info) => {
      const unitsRepo = em.getRepository(Unit);
      const relations = [
        'faction',
        'image',
        'abilities',
        'abilities.image',
        'unabilities',
        'unabilities.image',
      ];
      const units = args.faction
        ? await unitsRepo.find({
            where: {
              faction: { name: args.faction },
            },
            relations,
          })
        : await unitsRepo.find({
            relations,
          });

      return units
        .sort((a, b) => a.ordering - b.ordering)
        .map((unit) => ({
          ...unit,
          image: unit.image.href,
          faction: unit.faction.name,
          abilities: (unit.abilities || [])
            .sort((a, b) => a.ordering - b.ordering)
            .map((ability) => ({
              ...ability,
              image: ability.image.href,
            })),
          unabilities: (unit.unabilities || [])
            .sort((a, b) => a.ordering - b.ordering)
            .map((ability) => ({
              ...ability,
              image: ability.image.href,
            })),
        }));
    },
  },
});

export default resolvers;
