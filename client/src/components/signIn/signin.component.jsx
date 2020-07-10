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
        <h2 style={{ textAlign: "center", margin: "20px", color: "black" }}>
          signIn
        </h2>
        <form onSubmit={this.onSubmit} className="forms">
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            placeholder="email"
            className="inputs"
          />
          <input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            placeholder="password"
            className="inputs"
          />
          <div className="submit">
            <input type="submit" className="submit-btn" />
            <input
              type="button"
              value="sign in with google"
              onClick={signInWithGoogle}
              className="submit-btn"
            />
          </div>
        </form>
      </div>
    );
  }
}
