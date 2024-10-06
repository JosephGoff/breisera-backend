import User from "./models/user/user.js";
import UserQueries from "./models/user/queries.js";
import UserMutations from "./models/user/mutations.js";
import type { Resolvers } from "../generated/graphql.js";

const resolvers: Resolvers = {
  Query: {
    ...UserQueries,
  },
  Mutation: {
    ...UserMutations,
  },
  User,
};

export default resolvers;
