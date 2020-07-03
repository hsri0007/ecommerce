import React from "react";
import "./collection.style.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const collectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="price">
          <p>${price}</p>
        </div>
      </div>
      <button className="c-button" onClick={() => addItem(item)}>
        Add to Cart
      </button>
    </div>
  );
};

const mapDistpatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDistpatchToProps)(collectionItem);
