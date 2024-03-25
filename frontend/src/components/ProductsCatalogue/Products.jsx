import React from "react";
import Product from "./Product";

const Products = (props) => {
  const { products } = props;
  console.log("in prods", products);
  const productHtml = products.map((product) => (
    <Product key={product.name} product={product} />
  ));

  // filter by shop id
  

  if (products.length > 0) {
    return (
      <>
        <div>Products</div>

        <div className="products-container">{productHtml}</div>
      </>
    );
  } else {
    return <p>nothing</p>;
  }
};

export default Products;
