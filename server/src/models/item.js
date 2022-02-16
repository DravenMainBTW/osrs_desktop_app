import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
  title: String,
  description: String,
  image_link: String,
  members_item: Boolean,
  limit: Number,
  item_value: Number,
  low_alch: Number,
  high_alch: Number,
  reference_id: Number,
});

export default mongoose.model("Item", ItemSchema);
