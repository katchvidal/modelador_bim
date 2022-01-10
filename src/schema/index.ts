import { GETALLUSERS, GETONEUSER } from "./query/user";
import { CREATEUSER } from "./mutation/user";
import { GREETING } from "./query/greeting";
import { GraphQLObjectType, GraphQLSchema } from "graphql";

const ROOT_QUERY = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
    GetUsers: GETALLUSERS,
    GetUser: GETONEUSER,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    CreateUser: CREATEUSER,
  },
});

export const schema = new GraphQLSchema({
  query: ROOT_QUERY,
  mutation: Mutation,
});
