import React from "react";

import "../App.css";

function SocialBlock({ children }) {
  return (
    <div
      className="social-block"
      style={{ padding: "15px", background: "#FAFAFA" }}
    >
      {children}
    </div>
  );
}

export default SocialBlock;
