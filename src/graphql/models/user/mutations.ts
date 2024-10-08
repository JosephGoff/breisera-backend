import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import logging from "../../../lib/logging/logging.js";
import type { MutationResolvers } from "../../../generated/graphql.js";

const logger = logging.getLogger();

const Mutation: MutationResolvers = {
  createUser: async (_parent, args, ctx) => {
    try {
      const { id, givenName, surname, email, displayName, photoUrl } =
        args.createUserInput;
      await ctx.db.user.create({
        data: {
          id,
          givenName,
          surname,
          email,
          displayName,
          photoUrl,
        },
      });

      return { ok: true };
    } catch (e) {
      logger.error(e);

      let retVal;

      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          retVal = {
            ok: false,
            error: "User already exists",
          };
        } else {
          retVal = {
            ok: false,
            error: "DB error",
          };
        }
      } else {
        retVal = {
          ok: false,
          error: "Unknown error",
        };
      }

      return retVal;
    }
  },
  updateUser: async (_parent, args, ctx) => {
    const { id, givenName, surname, displayName, photoUrl, email } =
      args.updateUserInput;

    if (!(givenName || surname || displayName || photoUrl || email)) {
      return { ok: false, error: "No fields to update" };
    }

    try {
      await ctx.db.user.update({
        where: {
          id,
        },
        data: {
          email: email ?? undefined,
          givenName: givenName ?? undefined,
          surname: surname ?? undefined,
          displayName: displayName ?? undefined,
          photoUrl: photoUrl ?? undefined,
        },
      });

      return { ok: true };
    } catch (e) {
      logger.error(e);
      return { ok: false, error: (e as Error).message };
    }
  },
};

export default Mutation;
