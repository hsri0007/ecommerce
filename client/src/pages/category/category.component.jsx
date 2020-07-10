import React from "react";
import { connect } from "react-redux";
import { collectionUrl } from "../../redux/collection/collection.select";
import CollectionItem from "../../components/collectionItem/collectionItem.component";
import "./category.style.scss";

const Categorypage = ({ url }) => {
  const { title, items } = url;
  return (
    <div className="cat-main">
      <h1>{title}</h1>
      <div className="cat-container">
        {items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  url: collectionUrl(props.match.params.id)(state),
});

export default connect(mapStateToProps)(Categorypage);
