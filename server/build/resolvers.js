"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world',
        recipe: (_, { ID }) => {
            return 'ABCDE: ' + ID;
        }
    },
};
exports.default = resolvers;
