import React from "react";
import MenuItem from "../utilities/MenuItem";

import { menuItems } from "../data/data";

function Navigation() {
  return (
    <div
      style={{
        marginBottom: "40px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {menuItems.map((menu, idx) => (
        <MenuItem key={idx} link={menu.link}>
          {menu.item}
        </MenuItem>
      ))}
    </div>
  );
}

export default Navigation;
