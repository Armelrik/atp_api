import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("order", orderSchema);
