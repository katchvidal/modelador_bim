import { GraphQLBoolean, GraphQLString } from "graphql";
import { Users } from "../../entities/User";
import { USER_TYPE } from "../typeDefs/User";
import bcrypt from "bcryptjs";

export const CREATEUSER = {
  type: USER_TYPE,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    Password: { type: GraphQLString },
    isActive: { type: GraphQLBoolean },
  },
  async resolve(_: any, args: any) {
    const { firstName, lastName, Password, isActive } = args;
    const HashedPassword = await bcrypt.hashSync(Password, 10);

    const response = await Users.insert({
      firstName,
      lastName,
      Password: HashedPassword,
      isActive,
    });

    return {
      ...args,
      Password: HashedPassword,
      id: response.identifiers[0].id,
    };
  },
};
