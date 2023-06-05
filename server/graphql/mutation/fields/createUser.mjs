import {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

import UserSchema from '../../../mongoose/schema/user.mjs'

const UserResponse = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});

const createUser = {
    type: UserResponse, // returning type
    args: {
        firstname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(source,args,ctx) {
        
        const user = new UserSchema({
            firstname: args.firstname,
            lastname: args.lastname,
            age: args.age
        })

        const res = await user.save()

        console.log(res)
        
        return {
            id: res.id
        }
    },
}

export default createUser
