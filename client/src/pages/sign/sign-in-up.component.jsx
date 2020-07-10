import React from "react";
import "./sign-in-up.style.scss";
import SignIn from "../../components/signIn/signin.component";
import SignUp from "../../components/signup/signup.component";
const SignInUP = () => (
  <div className="sign">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUP;
