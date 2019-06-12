import React from "react";
import HeaderBig from "components/Header/HeaderBig";

import styles from "./CartPage.module.css";

const CartPage = ({cart,removeFromCart}) => (
  <>
    <HeaderBig>Product in Cart</HeaderBig>
    <div className = {styles.Cart}>
    {cart.map(product => (
      <ul key={product._id}>
          <li > {product.name}</li>
          <li > Cost: {product.amount}</li>
          <button onClick = {()=>removeFromCart(product)}>DELETE</button>
      </ul>
    ))}
  </div>
   
  </>
);

export default CartPage;
