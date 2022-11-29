import React from "react";
import { Link } from "react-router-dom";
import right from "./../../assets/icons/menu/right.svg";
import "./MenuLink.scss";
function MenuLink({ isOpen, children, isActive, ...props }) {
  return (
    <Link {...props} className={`link ${isActive ? "active" : ""}`}>
      <span>{children}</span>
      {!isOpen && (
        <span className="arrow">
          <img src={right} alt="right" />
        </span>
      )}
    </Link>
  );
}

export default MenuLink;
