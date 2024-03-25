// (/category)
//   GET (/:id) get category by id
//   POST (/create) create category
//   DELETE (/:id) delete category
//   POST (/:id) edit category

import express from "express";
import {
  getCategory,
  createCategory,
  deleteCategory,
  editCategory,
} from "../controllers/category.js";

const router = express.Router();

router.get("/:id", getCategory);
router.post("/create", createCategory);
router.delete("/:id", deleteCategory);
router.post("/:id", editCategory);

export default router;
