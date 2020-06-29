import React from "react";
import "./checkout.style.scss";
import Buttonpay from "../../components/stripeinte/stripe.component";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.select";
import { connect } from "react-redux";
import Check from "../../components/checkout/checkoutitem.component";

const check = ({ cartItems, Total }) => (
  <div className="checkpage">
    <div className="checkheader">
      <div className="checkitems">product</div>
      <div className="checkitems">description</div>
      <div className="checkitems">quantity</div>
      <div className="checkitems">price</div>
      <div className="checkitems">remove</div>
    </div>
    <div>
      {cartItems.map((cartItem) => (
        <Check key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <div style={{ width: "100", display: "flex" }}>
      <h3 style={{ marginLeft: "auto" }}>Total:{Total}</h3>
    </div>

    <Buttonpay price={Total} />

    <div
      style={{
        marginTop: "20px",
        textAlign: "center",
        color: "red",
        marginBottom: "20px",
      }}
    >
      <p>
        "test payment using demo card
        <br />
        4242 4242 4242 4242
        <br />
        01/2022 cvv:123"
      </p>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  Total: selectCartItemsTotal(state),
});

export default connect(mapStateToProps)(check);
