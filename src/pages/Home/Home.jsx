import BlogPage from "../../components/BlogPage/BlogPage";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero type={"welcome to our blog"} />
      <BlogPage />
    </div>
  );
};

export default Home;
