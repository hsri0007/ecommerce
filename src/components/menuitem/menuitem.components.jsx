import React from "react";
import "./menuitem.style.scss";
import { withRouter } from "react-router-dom";

const Menuitem = ({ id, title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    key={id}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(Menuitem);
