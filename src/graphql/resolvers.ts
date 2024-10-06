// // graphql/resolvers.ts
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// const resolvers = {
//   Query: {
//     users: async () => {
//       return prisma.user.findMany();
//     },
//   },
// };

// export default resolvers;

// import User from "./models/user/user.js";
// import UserQueries from "./models/user/queries.js";
// import UserMutations from "./models/user/mutations.js";
// import CountyQUeries from "./models/county/queries.js";
// import SiteQueries from "./models/site/queries.js";
// import SiteMutations from "./models/site/mutations.js";
// import StatisticsQueries from "./services/statistics/queries.js";
import type { Resolvers } from "../generated/graphql.js";

const resolvers: Resolvers = {
  // Query: {
  // },
  // Mutation: {
  // },
  // User,
};

export default resolvers;
