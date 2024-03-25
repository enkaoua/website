import Category from "../models/category.js";
import Product from "../models/product.js";
import Shop from "../models/shop.js";

// (/product)
//    GET (/:id) get product by id
//    POST (/create) create product
//    DELETE (/:id) delete
//    POST (/:id) edit

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id)
      .populate("category_id")
      .populate("shop_id");
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  console.log(product);
  try {
    // get shop
    const shop = await Shop.findById(product.shop_id);
    // get category
    const category = await Category.findById(product.category_id);

    // create product
    const newProduct = await Product.create(product);

    // update category
    category.products.push(newProduct);
    // update shop
    shop.products.push(newProduct);

    await category.save();
    await shop.save();
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.deleteOne({ _id: id });
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editProduct = async (req, res) => {
  res.send("edit product");
};
