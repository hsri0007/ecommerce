import React from "react";
import CollectionItem from "../collectionItem/collectionItem.component";
import "./collection.style.scss";
import { withRouter } from "react-router-dom";

const Collection = ({ title, items, routeName, history, match }) => (
  <div className="collection-preview">
    <div
      className="title"
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      <h2>{title}</h2>
    </div>
    <div className="preview">
      {items
        .filter((item, id) => id < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(Collection);
