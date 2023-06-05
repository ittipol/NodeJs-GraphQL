import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';

import UserSchema from '../../../mongoose/schema/user.mjs'

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        firstname: {
            type: GraphQLString
        },
        lastname: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
});

// http://localhost:4000/graphql?query={allUser{firstname,lastname,age}}
const allUser = {
    type: new GraphQLList(UserType),
    resolve() {
        // query from database
        return UserSchema.find()
    }
}

export default allUser