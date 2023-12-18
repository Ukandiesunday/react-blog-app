import "./BlogCards.css";
import { Link } from "react-router-dom";

import React from "react";

const BlogCards = ({ blogs }) => {
  const filteredBlogs = blogs.slice(0, 12);
  return (
    <div className="blog-cards">
      {filteredBlogs?.map((blog) => (
        <div className="blog-wrapper" key={blog.title}>
          <Link className="links" to={blog.url}>
            <div className="img-container">
              <img src={blog.urlToImage} alt="" />
              <p>{blog.description}</p>
              <p>{blog?.Author}</p>
              <p>{blog?.publishedAt}</p>
              <p>{blog?.content}</p>
            </div>
            <div className="details-wrapper">
              <h2>{blog.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
