import data from "../data.js";

// get products
const getProducts = async () => {
  const res = await fetch(`http://localhost:3030/api/products${searchQuery}`);
  const data = await res.json();
  setBackendProducts(data);
};

const getProductsOffline = async () => {
  return data;
};
