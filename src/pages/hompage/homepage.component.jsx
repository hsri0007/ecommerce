import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory.components";
import back from "../../components/bg.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div
        className="back-home"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),url(${back})`,
        }}
      ></div>
      <Directory />
    </div>
  );
};
export default Homepage;
