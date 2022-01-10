import app from "./app";
import { connectMYSQL } from "./mysql";
const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await connectMYSQL();
    app.listen(PORT, () => {
      console.log("==============SERVER==================");
      console.log(`Server Working at: http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
