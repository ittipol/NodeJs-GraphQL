// A map of functions which return data for the schema.
const resolvers = {
    Query: {
      hello: () => 'world',
      recipe: (_, { ID }) => {
        return 'ABCDE: '+ ID
      }
    },
  };

  export default resolvers