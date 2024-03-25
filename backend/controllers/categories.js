import Category from "../models/category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    console.log(categories);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
