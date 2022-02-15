import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
  title: String,
  description: String,
  reference_id: Number,
});

export default mongoose.model("Item", ItemSchema);
