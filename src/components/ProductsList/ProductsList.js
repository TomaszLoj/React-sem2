import React from "react";

import styles from "./ProductsList.module.css";

import Product from "components/Product/Product";
import ProductContainer from "../../container/ProductContainer/ProductContainer";

const ProductsList = ({ products }) => (
  <div className={styles.Products}>
    {products.map(product => (
      <ProductContainer key={product._id} {...product} />
    ))}
  </div>
);

export default ProductsList;
