import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

import typeDefs from './schema.graphql';
import { EntityManager } from 'typeorm';

const createSchema = (em: EntityManager) =>
  makeExecutableSchema({
    typeDefs,
    resolvers: resolvers(em) as any,
  });

export { createSchema };
