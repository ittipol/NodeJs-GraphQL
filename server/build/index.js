"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const port = 4000;
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // Set up Apollo Server
    const server = new server_1.ApolloServer({
        typeDefs: typeDefs_1.default,
        resolvers: resolvers_1.default,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    yield server.start();
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/graphql", (0, express4_1.expressMiddleware)(server));
    app.get("/", (req, res) => {
        res.send("OK");
    });
    app.listen(port, () => {
        console.log(`🚀 Server ready at ${'http://localhost:4000'}`);
    });
    // app.use(
    //   cors(),
    //   bodyParser.json(),
    //   expressMiddleware(server),
    // );
    // await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    // console.log(`🚀 Server ready at http://localhost:4000`);
});
main();
