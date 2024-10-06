import server from "./server.js";
import logging from "./lib/logging/logging.js";
import path from "path";

if (!process.env.LOG_PATH) {
  throw new Error("LOG_PATH environment variable is required");
}

logging.configLogger({
  level: "info",
  logFilePath: path.resolve(process.env.LOG_PATH),
});

const logger = logging.getLogger();

if (!process.env.PORT) {
  throw new Error("PORT environment variable is required");
}

server
  .listen({ port: Number.parseInt(process.env.PORT), host: "0.0.0.0" })
  .then(() => {
    logger.info(
      `Running a GraphQL API server at http://localhost:${process.env.PORT}/graphql`,
    );
    if (process.env.NODE_ENV === "development") {
      logger.info(
        `Running a GraphiQL server at http://localhost:${process.env.PORT}/graphiql`,
      );
    }
  })
  .catch((err) => {
    logger.error(err);
    process.exit(1);
  });
