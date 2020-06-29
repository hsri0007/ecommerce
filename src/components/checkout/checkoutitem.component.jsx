import React from "react";
import "./checkout.style.scss";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const Check = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div>
      <div className="check-header">
        <div className="check-image">
          <img alt="item" src={imageUrl} />
        </div>
        <div className="name">{name}</div>
        <div
          className="quantity"
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <div className="arrow" onClick={() => removeItem(cartItem)}>
            &#10094;
          </div>
          {quantity}
          <div className="arrow" onClick={() => addItem(cartItem)}>
            &#10095;
          </div>
        </div>
        <div className="price">{price}</div>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>
          x
        </div>
      </div>
    </div>
  );
};

const mapDistpatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDistpatchToProps)(Check);
