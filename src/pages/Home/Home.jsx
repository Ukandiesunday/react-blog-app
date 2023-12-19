import BlogPage from "../../components/BlogPage/BlogPage";
import Hero from "../../components/Hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero
        title="welcome to our blog"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor
          natus temporibus sit id ipsum?"
      />
      <BlogPage />
    </div>
  );
};

export default Home;
