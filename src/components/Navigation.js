import React, { useState } from "react";
import MenuItem from "../utilities/MenuItem";

import { menuItems } from "../data/data";
import style from "./Navigation.module.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className={style.navContainer}>
      {/* Hamburger Icon */}
      <button
        className={style.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </button>
      {/* Menu Items */}
      <div className={`${style.menu} ${isMenuOpen ? style.open : ""}`}>
        {menuItems.map((menu, idx) => (
          <MenuItem key={idx} link={menu.link}>
            {menu.item}
          </MenuItem>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
