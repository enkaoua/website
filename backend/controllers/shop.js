import Shop from "../models/shop.js";
// (/shop)
//   GET (/:id) get shop by id
//   POST (/create) create shop
//   DELETE (/:id) delete shop
//   POST (/:id) edit shop

export const getShop = async (req, res) => {
  const { id } = req.params;
  try {
    const shop = await Shop.findById(id).populate("products_id");
    console.log(shop);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createShop = async (req, res) => {
  const { name } = req.body;
  try {
    const newShop = await Shop.create({ name });
    await newShop.save();
    res.status(201).json(newShop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteShop = async (req, res) => {
  const { id } = req.params;

  try {
    const shop = await Shop.deleteOne({ _id: id });
    console.log(shop);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editShop = async (req, res) => {
  res.send("edit catregoriey");
};
