import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyAuth from "@fastify/auth";
import { PrismaClient } from "@prisma/client";
import { createHandler } from "graphql-http/lib/use/fastify";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import typeDefs from "./graphql/typeDefs.ts"
import resolvers from "./graphql/resolvers.ts";

const prisma = new PrismaClient();
initializeApp({ credential: applicationDefault() });
const auth = getAuth();

const server = Fastify();

// GraphQL schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

await server.register(cors, {
  credentials: true,
});

// JWT middleware
// server.decorate("verifyJWT", async (request, reply, done) => {
//   const authHeader = request.headers.authorization;
//   if (!authHeader) {
//     reply.code(401).send({ error: "Unauthorized" });
//   } else {
//     const token = authHeader.split(" ")[1];
//     try {
//       const decodedToken = await auth.verifyIdToken(token, true);
//       request.decodedIdToken = decodedToken;
//       done();
//     } catch (error) {
//       reply.code(401).send({ error: "Unauthorized" });
//     }
//   }
// });

// Register GraphQL route with JWT protection
// server.register(fastifyAuth).after(() => {
//   server.all(
//     "/graphql",
//     { onRequest: server.auth([server.verifyJWT]) },
//     createHandler({
//       schema,
//       context: { db: prisma },
//     })
//   );
// });

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});