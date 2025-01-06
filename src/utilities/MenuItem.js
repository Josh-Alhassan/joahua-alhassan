import React from "react";
import style from "./MenuItem.module.css";
import { NavLink } from "react-router-dom";
function MenuItem({ children, link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? `${style.menu} ${style.active}` : style.menu
      }
    >
      {children}
    </NavLink>
  );
}

export default MenuItem;
