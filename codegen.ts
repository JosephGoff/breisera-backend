import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-document-nodes",
        {
          add: {
            content:
              'import { BreiseraContext } from "../graphql/context.js"',
          },
        },
      ],
      config: {
        scalars: {
          DateTime: "string",
          Date: "string",
        },
        defaultMapper: "Partial<{T}>",
        contextType: "BreiseraContext",
      },
    },
    "src/generated/graphql.schema.json": {
      plugins: ["introspection"],
      config: {
        scalars: {
          DateTime: "string",
          Date: "string",
        },
      },
    },
  },
};

export default config;
