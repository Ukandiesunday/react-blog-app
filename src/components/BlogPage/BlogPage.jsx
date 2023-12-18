import { useState, useEffect } from "react";
import "./BlogPage.css";
import axios from "axios";
import BlogCards from "../BlogCards/BlogCards";
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  // const [selectedQ, setSelectedQ] = useState(null);
  // const [pageSize, setPageSize] = useState(12);
  // const currentPage = 1;
  let url = `https://newsapi.org/v2/everything?q=health&apiKey=1700df8f88bc4a42b1d5da018cdaa2bf`;

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
  }, []);

  const handleSelectedQ = (name) => {
    // setSelectedQ(name);
  };
  console.log(blogs);
  return (
    <main>
      <div className="blog-page">
        <BlogCards blogs={blogs} />
      </div>
      <button onClick={() => handleSelectedQ("health")}>health</button>
    </main>
  );
};

// import React, { useEffect, useState } from 'react';

// const NewsComponent = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace 'YOUR_API_KEY' with your actual News API key
//         const apiKey = 'YOUR_API_KEY';
//         const apiUrl = 'https://newsapi.org/v2/top-headlines';
//         const country = 'us'; // You can adjust parameters based on your needs

//         const response = await fetch(`${apiUrl}?country=${country}&apiKey=${apiKey}`);

//         if (response.ok) {
//           const data = await response.json();
//           setNewsData(data.articles);
//         } else {
//           console.error(`Error: ${response.status} - ${response.statusText}`);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div>
//       <h2>Top Headlines</h2>
//       <ul>
//         {newsData.map((article, index) => (
//           <li key={index}>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               {article.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewsComponent;

export default BlogPage;
