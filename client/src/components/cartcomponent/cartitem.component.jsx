import React from "react";
import "./cartitem.style.scss";

const cartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="cart-comp">
    <img src={imageUrl} className="cart-image" alt="cart" />
    <span className="cart-text">
      <p>{name}</p>
      <p>
        {quantity}x {price}
      </p>
    </span>
  </div>
);

export default cartItem;
