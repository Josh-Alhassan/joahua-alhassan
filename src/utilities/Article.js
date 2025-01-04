import React from "react";

import style from "./Article.module.css";

function Article({ children }) {
  return (
    <article
      className={style.article}
      style={{ textAlign: "left", padding: "20px 0", lineHeight: "1.5" }}
    >
      {children}
    </article>
  );
}

export default Article;
