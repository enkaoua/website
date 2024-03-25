import Category from "../models/category.js";
import Product from "../models/product.js";
import xlsx from "xlsx";
import mongoose from "mongoose";

/* export const getProducts = async (req, res) => {
  const { searchName, price } = req.query;
  try {
    const filter = searchName
      ? { name: { $regex: searchName, $options: "i" } }
      : {};

    if (price) {
      const products = await Product.find(filter).where("price").lt(price);
      console.log("price");
      console.log(products);
    } else {
      const products = await Product.find(filter);
    }
    //const products = await Product.find(filter);
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; */

export const getProducts = async (req, res) => {
  const { searchName, minPrice, maxPrice, categoryNames, shop_id } = req.query;
  console.log(searchName, minPrice, maxPrice, categoryNames, shop_id);
  try {
    // Let's start with a blank filter
    const filter = {};
    //convert category name to category ID
    const categories = await Category.find({
      name: { $in: categoryNames },
    });
    const categoryIDs = categories.map((category) => category._id);

    // This is the case where the user wishes to filter by product name
    if (searchName) {
      filter["name"] = { $regex: searchName, $options: "i" };
    }

    // filtering by shop ID
    if (shop_id) {
      filter["shop_id"] = shop_id;
    }

    // category filtering
    if (categories.length > 0) {
      filter["$and"] = categoryIDs.map((category) => ({
        category_id: { $in: category },
      }));
    }

    console.log(filter);
    // Here is the general search
    const promise = Product.find(filter);

    // further filter (price)
    let products;
    if (maxPrice) {
      products = await promise.where("price").lte(maxPrice).gte(minPrice);
      console.log("price");
    } else {
      products = await promise;
      console.log({ products });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category_id } = req.params;
  console.log(category_id);
  try {
    const products = await Product.find({ category_id });
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByShop = async (req, res) => {
  const { shop_id } = req.params;
  console.log(shop_id);
  try {
    const products = await Shop.find({ shop_id });
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const importProductsFromExcel = async (req, res) => {
  /* const file_path =
    "/Users/aure/Documents/websites/basic-webapp/backend/scraped_data/j_books_data_all.xlsx";
   */
  const { file_path, sheet_name, shop_id, category_id } = req.body;
  console.log(file_path, sheet_name, shop_id, category_id);
  const xlFile = xlsx.readFile(file_path);

  // if user specified sheet name, otherwise get the first sheet
  const sheet_selected = sheet_name || xlFile.SheetNames[0];
  // extract data in sheet
  const sheet = xlFile.Sheets[sheet_selected]; // or xlFile.Sheets["sheet_name"];
  // convert sheet to json
  const json = xlsx.utils.sheet_to_json(sheet);
  console.log("got products");
  const products = [];
  const errorsList = [];
  json.forEach(async (record) => {
    //console.log(record);
    try {
      //const products = await Product.insertMany(json);
      //const errorsList = [];
      record["shop_id"] = shop_id;
      record["category_id"] = category_id;
      const newProduct = await Product.create(record);
      await newProduct.save();
      products.push(newProduct.name);
    } catch (error) {
      console.log(error.message);
      //res.status(500).json({ message: error.message });
      errorsList.push(error.message);
    }
  });

  /* res
    .status(200)
    .json({ message: `created ${products.length} products`, errorsList });
 */
  res.send(errorsList);
};
