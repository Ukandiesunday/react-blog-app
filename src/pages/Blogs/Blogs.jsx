import BlogPage from "../../components/BlogPage/BlogPage";
import Hero from "../../components/Hero/Hero";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <Hero title="our blog" />
      <BlogPage />
    </div>
  );
};

export default Blogs;
