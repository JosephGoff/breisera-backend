import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyAuth from "@fastify/auth";
import { ruruHTML } from "ruru/server";
import { createHandler } from "graphql-http/lib/use/fastify";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { PrismaClient } from "@prisma/client";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import logging from "./lib/logging/logging.js";
import type { onRequestHookHandler } from "fastify";
import type { DecodedIdToken } from "firebase-admin/auth";
import type { BreiseraContext } from "./graphql/context.js";
import { serviceAccount } from "../service-account.js"


declare module "fastify" {
  interface FastifyRequest {
    decodedIdToken: DecodedIdToken;
  }
  interface FastifyInstance {
    verifyJWT: onRequestHookHandler;
  }
}

const logger = logging.getLogger();

// Initialize Prisma Client
const prisma = new PrismaClient();

// Initialize Firebase Admin SDK
initializeApp({ credential: cert(serviceAccount as any), });
const auth = getAuth();

// Initialize Fastify server
const server = Fastify();

// Initialize GraphQL server
const context: BreiseraContext = {
  db: prisma,
};
// Leaving here in case we need to add the decodedIdToken to the context in the
// future
// const partialBreiseraContext: Partial<BreiseraContext> = {
//   db: prisma,
// };
const schema = makeExecutableSchema({ typeDefs, resolvers });

await server.register(cors, {
  credentials: true,
});

// Only enable GraphiQL in development
if (process.env.NODE_ENV === "development") {
  server.get("/graphiql", async (_request, reply) => {
    reply
      .header("Content-Type", "text/html")
      .status(200)
      .send(ruruHTML({ endpoint: "/graphql" }));
  });
}

server.get('/', async (request, reply) => {
  return { message: 'Welcome to the briesera server!' };
});

server
  // Define a custom onRequest hook to verify JWT
  .decorate("verifyJWT", (request, reply, done) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      logger.error("Authorization header not found in request");
      logger.info(request);
      reply.code(401).send({ error: "Unauthorized" });
    } else {
      // Extract the token from the Authorization header
      const token = authHeader.split(" ")[1];

      auth
        .verifyIdToken(token, true)
        .then((decodedToken) => {
          // Attach the decoded token to the request object
          request.decodedIdToken = decodedToken;
          done();
        })
        .catch((error) => {
          logger.info(`Token: ${token}`);
          logger.error(error);
          reply.code(401).send({ error: "Unauthorized" });
          logger.info(request.headers);
        });
    }
  })
  .register(fastifyAuth)
  .after(() => {
    server.all(
      "/graphql",
      {
        onRequest: server.auth([server.verifyJWT]),
      },
      createHandler({
        schema,
        context: (request) => {
          console.log("Request:", request.body); 
          logger.info("Request:", request.body); 
          return context;
        }

        // Leaving here in case we need to add the decodedIdToken to the context
        // in the future
        // context: (request) => ({
        //   ...partialBreiseraContext,
        //   decodedIdToken: request.raw.decodedIdToken,
        // }),
      }),
    );
  });

export default server;
