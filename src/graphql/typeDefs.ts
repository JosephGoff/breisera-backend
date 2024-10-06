// // graphql/typeDefs.ts
// import { gql } from "graphql-tag";

// const typeDefs = gql`
//   type User {
//     id: Int!
//     email: String!
//     name: String
//   }

//   type Query {
//     users: [User!]!
//   }
// `;

// export default typeDefs;

import path from "path";
import url from "url";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { typeDefs as ScalarTypeDefs } from "graphql-scalars";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, "./**/*.graphql"));
const typeDefs = mergeTypeDefs([...typesArray, ScalarTypeDefs]);

export default typeDefs;
