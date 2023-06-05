// The GraphQL schema
const typeDefs = `#graphql
  type Recipe {
    name: String
    description: String
  }

  input RecipeInput {
    name: String
    description: String
  }

  type Query {
    hello: String
    recipe(ID: ID!): String
  }
`;

export default typeDefs