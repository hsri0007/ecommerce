import React, { Component } from "react";
import "./signIn.style.scss";
import { auth, signInWithGoogle } from "../../firebase.utils";

export default class signin extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="form">
        <h1 style={{ textAlign: "center", margin: "20px" }}>signIn</h1>
        <form onSubmit={this.onSubmit} className="inputflex">
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            placeholder="password"
          />
          <div>
            <input type="submit" />
            <input
              type="button"
              value="sign in with google"
              onClick={signInWithGoogle}
            />
          </div>
        </form>
      </div>
    );
  }
}
