import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectCollection = (state) => state.shop;

export const collectionSelector = createSelector(
  [selectCollection],
  (shop) => shop.shopdata,
);
export const collectionUrl = (params) =>
  createSelector(
    [collectionSelector],
    (shops) => shops.find((shop) => shop.id === COLLECTION_ID_MAP[params]),
  );
