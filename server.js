import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.set("strictQuery", true);

try {
  await mongoose.connect(
    "mongodb+srv://armelrik:antille@atp-cluster.h1dihov.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("connected to Mongo!");
} catch (error) {
  console.log(error);
  //   handleError(error);
}

app.listen(8800, () => {
  console.log("Backend server running!");
});
