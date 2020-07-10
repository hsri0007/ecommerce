import React from "react";
import "./cartdrop.style.scss";
import Cartitem from "../cartcomponent/cartitem.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.select";
import { withRouter } from "react-router-dom";
import { cartAction } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";

const Cartdrop = ({ cartItems, history, cartAction }) => {
  return (
    <div className="cart-drop">
      <div className="cart-menu">
        {cartItems.length
          ? cartItems.map((CartItem) => (
            <Cartitem key={CartItem.id} item={CartItem} />
          ))
          : <p>empty</p>}
      </div>
      <button
        className="cart-button"
        onClick={() => {
          history.push("/checkoutpage");
          cartAction();
        }}
      >
        checkout
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDistpatchToprops = (dispatch) => ({
  cartAction: () => dispatch(cartAction()),
});

export default withRouter(
  connect(mapStateToProps, mapDistpatchToprops)(Cartdrop),
);
