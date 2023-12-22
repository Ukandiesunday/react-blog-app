import { useState, useEffect } from "react";
import "./BlogPage.css";

import BlogCards from "../BlogCards/BlogCards";
import axios from "axios";
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("ai");
  // const [pageSize, setPageSize] = useState(12);
  // const currentPage = 1;
  const apiKey = process.env.REACT_APP_NEWSAPI_KEY;
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url).then((res) => res.data);
      setBlogs(data.articles);
    };
    fetchData();
  }, [query, url]);

  const handleSelectedQ = (topic) => {
    setQuery(topic);
  };
  console.log(blogs);
  return (
    <main>
      <div className="btns-container">
        <button onClick={() => handleSelectedQ("ai")}>AI</button>
        <button onClick={() => handleSelectedQ("health")}>health</button>
        <button onClick={() => handleSelectedQ("security")}>Security</button>
        <button onClick={() => handleSelectedQ("tech")}>Tech</button>
        <button onClick={() => handleSelectedQ("sports")}>Sports</button>
      </div>
      <div className="blog-page">
        <BlogCards blogs={blogs} />
      </div>
    </main>
  );
};

export default BlogPage;
