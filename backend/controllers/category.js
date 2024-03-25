import Category from "../models/category.js";
// (/category)
//   GET (/:id) get category by id
//   POST (/create) create category
//   DELETE (/:id) delete category
//   POST (/:id) edit category

export const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    console.log(category);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await Category.create({ name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.deleteOne({ _id: id });
    console.log(category);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editCategory = async (req, res) => {
  res.send("edit catregoriey");
};
