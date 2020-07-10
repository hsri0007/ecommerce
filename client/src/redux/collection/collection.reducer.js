import Shopdata from "./shopdata";

const INITIAL_STATE = {
  shopdata: Shopdata,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_COLLECTIONS":
      return {
        ...state,
        shopdata: action.payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
