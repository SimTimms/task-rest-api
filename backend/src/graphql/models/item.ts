import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
