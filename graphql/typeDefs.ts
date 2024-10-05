// graphql/typeDefs.ts
import { gql } from "graphql-tag";

const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    name: String
  }

  type Query {
    users: [User!]!
  }
`;

export default typeDefs;