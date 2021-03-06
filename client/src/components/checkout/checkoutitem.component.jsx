import React from "react";
import "./checkout.style.scss";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import Swal from "sweetalert2";

const Check = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const deleteItem = (cartItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        clearItem(cartItem);
      }
    });
  };
  return (
    <div>
      <div className="check-header">
        <div className="check-image">
          <img alt="item" src={imageUrl} />
        </div>
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div
          className="quantity"
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <div className="arrow" onClick={() => removeItem(cartItem)}>
            <h3>&#10094;</h3>
          </div>
          <h3>{quantity}</h3>
          <div className="arrow" onClick={() => addItem(cartItem)}>
            <h3>&#10095;</h3>
          </div>
        </div>
        <div className="price">
          {" "}
          <h3>${price}</h3>
        </div>
        <div className="remove-button" onClick={() => deleteItem(cartItem)}>
          <h3>x</h3>
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
