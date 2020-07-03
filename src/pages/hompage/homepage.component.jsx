import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.components";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="back-home"></div>
      <Directory />
    </div>
  );
};
export default Homepage;
