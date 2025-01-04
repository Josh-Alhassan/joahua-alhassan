import React from "react";

function SubHeading({ children, style }) {
  return (
    <h3 style={{ marginBottom: "10px", fontWeight: "300", ...style }}>
      {children}
    </h3>
  );
}

export default SubHeading;
