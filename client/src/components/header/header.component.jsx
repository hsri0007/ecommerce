import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase.utils";
import { connect } from "react-redux";
import Cartdrop from "../cart/cartdrop.component";
import { cartAction } from "../../redux/cart/cart.action";
import cart from "./cart.png";
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
        <h1 className="logo-title">
          shops<span style={{ color: " rgb(255, 166, 0)" }}>Adda</span>
        </h1>
      </Link>
      <ul className="nav-items">
        <Link to="/shop">
          <h3>shop</h3>
        </Link>
        {currentUser ? (
          <button onClick={() => auth.signOut()} className="nav-link">
            <h3>signout</h3>
          </button>
        ) : (
          <Link to="/sign">
            <h3>signin</h3>
          </Link>
        )}
        <div onClick={cartAction} className="cart-icon">
          <img src={cart} alt="cart" className="cart-image" />
          {cartIcon ? (
            <div className="cart-position">
              <p>{cartIcon}</p>
            </div>
          ) : null}
        </div>
      </ul>
    </nav>
    {hidden ? null : <Cartdrop />}
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
