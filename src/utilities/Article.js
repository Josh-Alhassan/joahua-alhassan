import React from "react";

function Article({ children }) {
  return (
    <article style={{ textAlign: "justify", padding: "20px 0" }}>
      {children}
    </article>
  );
}

export default Article;
