import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';
import productRoute from './routes/product.route.js';
import orderRoute from './routes/order.route.js';
import reviewRoute from './routes/review.route.js';
import messageRoute from './routes/message.route.js';
import conversationRoute from './routes/conversation.route.js';


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

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.listen(8800, () => {
  console.log("Backend server running!");
  connect();
});
