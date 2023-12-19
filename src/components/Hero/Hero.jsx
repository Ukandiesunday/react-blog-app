import "./Hero.css";

const Hero = ({ title, text }) => {
  return (
    <div>
      <div className="hero">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Hero;
