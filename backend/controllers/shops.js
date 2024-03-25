import Shop from "../models/shop.js";

export const getShops = async (req, res) => {
  try {
    const shop = await Shop.find({});
    console.log(shop);
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
