import React from "react";
import Navigation from "../components/Navigation";
import PrimaryHeader from "../utilities/PrimaryHeader";

import style from "./Blog.module.css";

function Blog() {
  return (
    <div>
      <Navigation />
      <PrimaryHeader fontWeight="500">My Blogs</PrimaryHeader>
      <a href="#" className={style.blogLink}>
        DATE
        <span>Blog Title</span>
      </a>
    </div>
  );
}

export default Blog;
