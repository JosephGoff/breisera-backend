import User from "./models/user/user.js";
import UserQueries from "./models/user/queries.js";
import UserMutations from "./models/user/mutations.js";
import type { Resolvers } from "../generated/graphql.js";

const resolvers: Resolvers = {
  Query: {
    user: UserQueries.user,
  },
  Mutation: {
    createUser: UserMutations.createUser,
  },
  User,
};

export default resolvers;
