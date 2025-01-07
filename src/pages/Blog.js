import React from "react";
import Navigation from "../components/Navigation";
import PrimaryHeader from "../utilities/PrimaryHeader";
import style from "./Blog.module.css";
import { blogPosts } from "../data/data";
import Footer from "../components/Footer";

function Blog() {
  return (
    <div>
      <Navigation />
      <PrimaryHeader fontWeight="500">My Blogs</PrimaryHeader>
      <div>
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={style.blogLink}
          >
            <p>{post.duration}</p>
            <p style={{ fontWeight: "400" }}>{post.title}</p>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
