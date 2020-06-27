import React from "react";
import CollectionItem from "../collectionItem/collectionItem.component";
import "./collection.style.scss";

const Collection = ({ title, items }) => (
  <div className="collection-preview">
    <div className="title">{title.toUpperCase()}</div>
    <div className="preview">
      {items
        .filter((item, id) => id < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Collection;
