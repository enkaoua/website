import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: false },
  link: { type: String, required: false },
  /*   discount: { type: Number, required: false }, */
  category_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      unique: false,
    },
  ],
  /*   group_id: {
    type: Schema.Types.ObjectId,
    ref: "groups",
    required: true,
  }, */
  shop_id: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
    unique: false,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
