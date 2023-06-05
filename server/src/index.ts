import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const port:number = 4000
const app = express();
const httpServer = http.createServer(app);

const main = async () => {
  // Set up Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(cors())
  app.use(bodyParser.json())
  app.use(express.urlencoded({extended: true}))
  app.use("/graphql", expressMiddleware(server))

  app.get("/", (req, res) => {
    res.send("OK")
  })

  app.listen(port, () => {
    console.log(`🚀 Server ready at ${'http://localhost:4000'}`);
  })

  // app.use(
  //   cors(),
  //   bodyParser.json(),
  //   expressMiddleware(server),
  // );

  // await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  // console.log(`🚀 Server ready at http://localhost:4000`);
}

main()