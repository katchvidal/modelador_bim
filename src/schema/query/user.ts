import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { USER_TYPE } from "../typeDefs/User";
import { Users } from "../../entities/User";

export const GETALLUSERS = {
  type: new GraphQLList(USER_TYPE),
  async resolve() {
    return await Users.find();
  },
};

export const GETONEUSER = {
  type: USER_TYPE,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const { id } = args;

    const User = await Users.findOne(id);
    console.log(User);

    return User;
  },
};
