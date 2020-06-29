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
      <div className="formes">
        <form onSubmit={this.onSubmit}>
          <h1 style={{ textAlign: "center", padding: "50px" }}>signup</h1>
          <input
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={this.state.displayName}
            required
            placeholder="displayName"
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
            placeholder="password"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
