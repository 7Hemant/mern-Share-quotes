import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    quote: { type: String, required },
  },
  {
    timestamps: true,
  }
);

export default module("User", PostSchema);
