// (/product)
//    GET (/:id) get product by id
//    POST (/create) create product
//    DELETE (/:id) delete
//    POST (/:id) edit

import express from "express";
import {
  getProduct,
  createProduct,
  deleteProduct,
  editProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/:id", getProduct);
router.post("/create", createProduct);
router.delete("/:id", deleteProduct);
router.post("/:id", editProduct);

export default router;
