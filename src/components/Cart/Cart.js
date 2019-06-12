import React from "react";

import styles from "./Cart.module.css";

const Cart = ({ productsCount , totalAmount}) => (
  <div className={styles.Cart}>
    <p className={styles.Text}> Products: {productsCount} Total: ${totalAmount.toFixed(2)}</p>
    {/* <h3>Products: {productsCount} Total: {totalAmount}</h3> */}
  </div>
);

export default Cart;
