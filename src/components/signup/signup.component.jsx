import React, { Component } from "react";
import { auth, createUserProfile } from "../../firebase.utils";
import "./signup.style.scss";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { email, password, displayName } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, { displayName });
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: "", displayName: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form">
        <h2 style={{ textAlign: "center", margin: "20px", color: "black" }}>
          signup
        </h2>
        <form onSubmit={this.onSubmit} className="forms">
          <input
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={this.state.displayName}
            required
            placeholder="displayName"
            className="inputs"
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
            placeholder="email"
            className="inputs"
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
            placeholder="password"
            className="inputs"
          />
          <input type="submit" className="submit-btn" />
        </form>
      </div>
    );
  }
}
