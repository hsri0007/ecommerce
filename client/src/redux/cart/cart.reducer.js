import { addItemToCart, RemoveItemToCart } from "./cart.utils";

const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: RemoveItemToCart(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) =>
          cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
