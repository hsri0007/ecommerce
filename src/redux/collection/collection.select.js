import { createSelector } from "reselect";



const selectCollection = (state) => state.shop;

export const collectionSelector = createSelector(
  [selectCollection],
  (shop) => shop.shopdata
);
export const collectionSelectorItems = createSelector(
  [collectionSelector],
  (shopdata) => Object.keys(shopdata).map((key)=>shopdata[key])
);
export const collectionUrl = (params) =>
  createSelector([collectionSelector], (shops) => shops[params]);
