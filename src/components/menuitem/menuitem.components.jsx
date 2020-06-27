import React from "react";
import "./menuitem.style.scss";

const Menuitem = ({ id, title, imageUrl, size }) => (
  <div
    className={`${size} menu-item`}
    key={id}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h3 className="title">{title}</h3>
      <span className="sub-title">shopnow</span>
    </div>
  </div>
);

export default Menuitem;
