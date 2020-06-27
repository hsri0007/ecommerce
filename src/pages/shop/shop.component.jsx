import React from "react";
import Collection from "../../components/collectionPreview/collection.component";
import "./shop.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { collectionSelector } from "../../redux/collection/collection.select";

const Shopdata = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Collection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const MapStateToProps = createStructuredSelector({
  collections: collectionSelector,
});

export default connect(MapStateToProps)(Shopdata);
