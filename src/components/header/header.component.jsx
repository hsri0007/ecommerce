import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase.utils";
import { connect } from "react-redux";
import Cartdrop from "../cart/cartdrop.component";
import { cartAction } from "../../redux/cart/cart.action";
import {
  selectCartItemsCount,
  selectCartHidden,
} from "../../redux/cart/cart.select";
import { selectCurrentUser } from "../../redux/user/user.select";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden, cartAction, cartIcon }) => (
  <header>
    <nav>
      <Link to="/" className="logo">
        logo
      </Link>
      <ul className="nav-items">
        <Link to="/shop">Shop</Link>
        {currentUser
          ? (
            <button onClick={() => auth.signOut()} className="signs">
              SignOut
            </button>
          )
          : (
            <Link to="/sign">SignIn</Link>
          )}
        <div
          onClick={cartAction}
          className="cart-icon"
        >
          {cartIcon}
        </div>
      </ul>
    </nav>
    {hidden ? <Cartdrop /> : null}
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartIcon: selectCartItemsCount,
});

const mapDistpatchToprops = (dispatch) => ({
  cartAction: () => dispatch(cartAction()),
});

export default connect(mapStateToProps, mapDistpatchToprops)(Header);
