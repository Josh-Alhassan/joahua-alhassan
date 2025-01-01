import React from "react";

import style from "./Article.module.css";

function Article({ children }) {
  return (
    <article
      className={style.article}
      style={{ textAlign: "left", padding: "20px 0" }}
    >
      {children}
    </article>
  );
}

export default Article;
