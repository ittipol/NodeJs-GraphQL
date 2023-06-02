import {
    GraphQLObjectType
} from 'graphql';

import hello from './fields/hello.mjs'
import allUser from './fields/allUser.mjs';

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello,
        allUser
    },
})

export default query