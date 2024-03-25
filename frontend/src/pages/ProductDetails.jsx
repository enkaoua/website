import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id: product_id } = useParams();
  const [product, setProduct] = useState({});

  const get_product = async () => {
    const res = await fetch(`http://localhost:3030/api/product/${product_id}`);
    const data = await res.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    // get product from backend
    get_product();
  }, []);

  console.log({ product });
  if (product._id) {
    return (
      <div style={styles.container}>
        {/* PRODUCT NAME AND DATA */}
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} style={styles.image} />
        <p>{product.description}</p>
        {product.stock > 0 ? (
          <p style={styles.in_stock}>in stock</p>
        ) : (
          <p style={styles.out_stock}>out of stock</p>
        )}
        <h3>£{product.price}</h3>
        {/* SHOP IT BELONGS TO */}
        <button
          onClick={() =>
            navigate({
              pathname: `/shop/${product.shop_id._id}`,
            })
          }
        >
          {product.shop_id.name}
        </button>
        {/* CATEGORIES OF PRODUCT */}
        categories:
        {product.category_id?.map((category) => (
          <button
            idx={category._id}
            onClick={() => {
              navigate({
                pathname: "/search",
                search: `?categoryNames=${category.name}`,
              });
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
};

// add styling to image to make it smaller

const styles = {
  out_stock: {
    color: "red",
    fontSize: "1.5rem",
    margin: "10px",
  },
  in_stock: {
    color: "green",
    fontSize: "1.5rem",
    margin: "10px",
  },
  container: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: "10px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "20vh",
    objectFit: "contain",
  },
};

export default ProductDetails;
