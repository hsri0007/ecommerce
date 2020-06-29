import React from "react";
import Collection from "../collectionPreview/collection.component";
import "./shop.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { collectionSelectorItems } from "../../redux/collection/collection.select";

const Shopdata = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Collection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const MapStateToProps = createStructuredSelector({
  collections: collectionSelectorItems,
});

export default connect(MapStateToProps)(Shopdata);
