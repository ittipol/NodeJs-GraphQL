import {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

// http://localhost:4000/graphql?query={hello(id:40)}
const hello = {
    type: GraphQLString,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(parent, args) {
        const res = `Data: ${args.id}`

        return res;
    },
}

export default hello