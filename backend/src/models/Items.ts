const dbLocal = require("db-local");
const { Schema } = new dbLocal({ path: "./databases" });

export const Item = Schema("Item", {
  _id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
