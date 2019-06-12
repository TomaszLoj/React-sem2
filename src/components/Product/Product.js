import React from "react";

import styles from "./Product.module.css";

// const Product = ({ name, image, amount, addToCart }) => (
const Product = props => (
  <div className={styles.Product}>
    <img className={styles.Image} src={props.image} alt={props.name} />
    <p className={styles.Price}>${props.amount}</p>
    <h3>{props.name}</h3>
    <button className = {styles.Button}  onClick = {()=>props.addToCart(props)}>Add to cart</button>
  </div>
);

export default Product;
