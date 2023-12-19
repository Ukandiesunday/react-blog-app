import { useState, useEffect } from "react";
import "./BlogPage.css";
import axios from "axios";
import BlogCards from "../BlogCards/BlogCards";
const BlogPage = () => {
  const apiKey = process.env.REACT_APP_NEWSAPI_KEY;
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState(null);
  // const [pageSize, setPageSize] = useState(12);
  // const currentPage = 1;
  let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // filter url by category

        const data = await axios.get(url).then((res) => res.data);
        setBlogs(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query]);

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
