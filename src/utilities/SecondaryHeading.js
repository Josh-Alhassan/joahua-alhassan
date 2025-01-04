import React from "react";

function SecondaryHeading({ children, style }) {
  return (
    <h2
      style={{
        marginTop: "30px",
        marginBottom: "10px",
        fontWeight: "400",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export default SecondaryHeading;
