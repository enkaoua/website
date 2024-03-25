// (/shop)
//   GET (/:id) get shop by id
//   POST (/create) create shop
//   DELETE (/:id) delete shop
//   POST (/:id) edit shop

import express from "express";
import {
  getShop,
  createShop,
  deleteShop,
  editShop,
} from "../controllers/shop.js";

const router = express.Router();

router.get("/:id", getShop);
router.post("/create", createShop);
router.delete("/:id", deleteShop);
router.post("/:id", editShop);

export default router;
