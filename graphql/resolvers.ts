// graphql/resolvers.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
  },
};

export default resolvers;