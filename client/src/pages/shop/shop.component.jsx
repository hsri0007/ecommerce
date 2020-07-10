import React from "react";
import CollectionOverview from "../../components/collectionOverview/collection-overview.component";
import { Route } from "react-router-dom";
import Categorypage from "../category/category.component";
import { firestore, covertCollections } from "../../firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/collection/collection.action";

class Shopdata extends React.Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unSubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = covertCollections(snapshot);
        updateCollection(collectionsMap);
      }
    );
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:id`} component={Categorypage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispacth) => ({
  updateCollection: (collectionsMap) =>
    dispacth(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shopdata);
