import mongoose from "mongoose";

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  name: String,
  products_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
