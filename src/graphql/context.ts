import type { PrismaClient } from "@prisma/client";

export type BreiseraContext = {
  db: PrismaClient;
};
