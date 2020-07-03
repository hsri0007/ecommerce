import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/hompage/homepage.component";
import Shoppage from "./pages/shop/shop.component";
import Sign from "./pages/sign/sign-in-up.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { auth, createUserProfile } from "./firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import Checkoutpage from "./pages/checkout/checkout.page";
import { withRouter } from "react-router-dom";

class App extends Component {
  unSubscribe = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot((snap) => {
          setCurrentUser({
            id: snap.id,
            ...snap.data(),
          });
        });
      }
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    return (
      <div className="back-ground">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/checkoutpage" component={Checkoutpage} />
          <Route
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Sign />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const MapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withRouter(connect(mapStateToProps, MapDispatchToProps)(App));
