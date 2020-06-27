import Shopdata from "./shopdata";

const INITIAL_STATE = {
  shopdata: Shopdata,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
