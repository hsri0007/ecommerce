import React from "react";
import "./cartitem.style.scss";

const cartItem = ({ item:{name,imageUrl,price,quantity} }) => (
  <div className="cart-comp">
    <img src={imageUrl} className="cart-image" alt="cart" />
    <span className="cart-text">
      <h3>{name}</h3>
      <h3>{quantity}x {price}</h3>
    </span>
  </div>
);

export default cartItem;
