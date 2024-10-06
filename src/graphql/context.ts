import type { PrismaClient } from "@prisma/client";

export type FloodAlertContext = {
  db: PrismaClient;
  // Leaving here in case we need to add the decodedIdToken to the context in
  // the future
  // decodedIdToken: DecodedIdToken;
};
