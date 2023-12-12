import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Now connected to Mongo!");
  } catch (error) {
    console.log(error);
  }
};

app.listen(8800, () => {
  console.log("Backend server running!");
  connect();
});
