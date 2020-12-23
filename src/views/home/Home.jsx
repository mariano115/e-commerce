import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import HomeCatalog from "../../components/HomeCatalog/HomeCatalog";
import HomeBody from "../../components/HomeBody/HomeBody";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="homePage centered">
      <Navbar />
      <Carousel />
      <HomeCatalog />
      <HomeBody />
    </div>
  );
};

export default HomePage;
