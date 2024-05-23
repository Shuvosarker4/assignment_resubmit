import app from "./app";
import mongoose from "mongoose";

async function main() {
  await mongoose.connect(
    "mongodb+srv://product_recap:iaFP6HJpxQISwUT3@cluster0.zjkcwvl.mongodb.net/Product_Recap?retryWrites=true&w=majority&appName=Cluster0"
  );
  const port = 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main();
