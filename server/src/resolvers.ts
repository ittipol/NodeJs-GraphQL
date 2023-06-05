import User from '@/mongoose/user'

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
      hello: () => 'world',
      recipe: (_:any, { ID }:{ ID:number }) => {

        return 'ABCDE: '+ ID
      }
    },
  };

  export default resolvers