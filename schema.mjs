import {
    GraphQLSchema
} from 'graphql';

import query from './graphql/query/schema.mjs';
import mutation from './graphql/mutation/schema.mjs';

export const schema = new GraphQLSchema({
    query,
    // mutation
});