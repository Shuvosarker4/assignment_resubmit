import app from "./app";
import mongoose from "mongoose";
import config from "./config";

async function main() {
  await mongoose.connect(config.db_url as string);

  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
}

main();
