import React from "react";
import "./ProductStyles.css";
import { useNavigate } from "react-router-dom";

const Product = (prop) => {
  const { product } = prop;
  const navigate = useNavigate();

  return (
    <div
      className="product-container"
      onClick={() => navigate(`/product/${product._id}`)}
    >
      {/* TODO add link to shop, add spaces */}

      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>£{product.price}</p>
      <p>{product.stock > 0 ? "in stock" : "out of stock"}</p>
      {/*       <button
        onClick={() =>
          navigate({
            pathname: `/shop/${product.shop_id._id}`,
          })
        }
      ></button> */}
    </div>
  );
};

export default Product;
