import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../components/ProductsCatalogue/Products";
import BrowseFilter from "../components/Browsing/BrowseFilter";

const Shop = (props) => {
  //const navigate = useNavigate();
  const { shop_id } = useParams();
  console.log({ shop_id });
  const [products, setProducts] = useState([]);
  const [shop, setShop] = useState({});

  // get products
  const getProducts = async () => {
    const res = await fetch(
      `http://localhost:3030/api/products?shop_id=${shop_id}`
    );
    const cats = await res.json();
    setProducts(cats);
  };

  const getShop = async () => {
    const res = await fetch(`http://localhost:3030/api/shop/${shop_id}`);
    const shop = await res.json();
    setShop(shop);
  };

  useEffect(() => {
    getProducts();
    getShop();
  }, []);

  /*   const onBrowserChange = (filter) => {
    const searchParams = new URLSearchParams(filter);
    console.log(searchParams.toString());
    navigate({ pathname: "/search", search: `?${searchParams}` });
  }; */
  if (products.length > 0) {
    return (
      <div>
        <h1>{shop.name}</h1>
        {/* <BrowseFilter
          onFilterChange={onBrowserChange}
          filterObject={{ "shop_id:": shop_id }}
        /> */}
        <Products products={products} />
      </div>
    );
  }
};

export default Shop;
