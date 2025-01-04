import React from "react";
import style from "./MenuItem.module.css";
import { Link } from "react-router-dom";
function MenuItem({ children, link }) {
  return (
    <Link to={link} className={style.menu}>
      {children}
    </Link>
  );
}

export default MenuItem;
