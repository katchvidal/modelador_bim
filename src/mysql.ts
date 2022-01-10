import { createConnection } from "typeorm";
import { Users } from "./entities/User";

export const connectMYSQL = async () => {
  try {
    await createConnection({
      type: "mysql",
      username: "root",
      password: "123456",
      port: 3306,
      host: "localhost",
      database: "graphql",
      entities: [Users],
      synchronize: true,
      ssl: false,
    });
    console.log("====================MYSQL=============================");
    console.log("Database MYSQL Connect");
  } catch (error) {
    console.log(error);
  }
};
