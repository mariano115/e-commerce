import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="homePage centered">
      <Navbar />
      <Carousel />
    </div>
  );
};

export default HomePage;
