import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  products_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

export default Category;

//module.exports = mongoose.model("category", categorySchema);
