import type { QueryResolvers } from "../../../generated/graphql.js";

const Query: QueryResolvers = {
  user: async (_parent, args, ctx) => {
    const user = await ctx.db.user.findUnique({
      where: { id: args.id },
    });

    return user;
  },
};

export default Query;
