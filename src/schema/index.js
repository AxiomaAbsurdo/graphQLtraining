import * as course from './course';
import * as professor from './professor';
import * as user from './user';
import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers';

const types = [];
const queries = [];
const mutations = [];

const modules = [course, professor, user];

modules.forEach(s => {
    types.push(s.types);
    queries.push(s.queries);
    mutations.push(s.mutations);
});

export const defaultSchema = gql`
  
  ${types.join('\n')}
  
  type Query {
   ${queries.join('\n')}
  }
  type Mutation {
    ${mutations.join('\n')}
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

export const schema = makeExecutableSchema({
    typeDefs: defaultSchema,
    resolvers,
});
