import React from "react";
import "./checkout.style.scss";
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
      <div className="checkitems">
        description
      </div>
      <div className="checkitems">quantity</div>
      <div className="checkitems">price</div>
      <div className="checkitems">remove</div>
    </div>
    <div>
      {cartItems.map((cartItem) =>
        <Check key={cartItem.id} cartItem={cartItem} />
      )}
    </div>
    <div style={{ width: "100", display: "flex" }}>
      <h3 style={{ marginLeft: "auto" }}>Total:{Total}</h3>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  Total: selectCartItemsTotal(state),
});

export default connect(mapStateToProps)(check);
