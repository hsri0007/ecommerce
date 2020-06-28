import React from "react";
import CollectionOverview from "../../components/collectionOverview/collection-overview.component";
import { Route } from "react-router-dom";
import Categorypage from "../category/category.component";

const Shopdata = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:id`} component={Categorypage} />
  </div>
);

export default Shopdata;
