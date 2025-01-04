import React from "react";
import MenuItem from "../utilities/MenuItem";

function Navigation() {
  const menuItems = [
    { item: "Home", link: "/" },
    { item: "Work", link: "/work" },
    { item: "Video", link: "/video" },
    { item: "Blog", link: "/blog" },
    { item: "Contact", link: "/contact" },
  ];
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
