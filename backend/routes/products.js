// (/products)
//    GET (/?page=page_num) get all products
//    GET (/?category=:id) get products of category
//    GET (/?colours=[]) get products by colours
//    GET (/?price_range=low,high) get products by price range

import express from "express";
import {
  getProducts,
  importProductsFromExcel,
  getProductsByCategory,
  getProductsByShop,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/category/:category_id", getProductsByCategory);

router.get("/shop/:shop_id", getProductsByShop);

router.post("/importProductsExcel", importProductsFromExcel);

export default router;
