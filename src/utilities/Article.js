import React from "react";

import style from "./Article.module.css";

function Article({ children, padding = "20px 0" }) {
  return (
    <article
      className={style.article}
      style={{ textAlign: "left", padding: padding, lineHeight: "1.5" }}
    >
      {children}
    </article>
  );
}

export default Article;
