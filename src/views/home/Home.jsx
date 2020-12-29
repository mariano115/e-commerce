import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import HomeCatalog from "../../components/HomeCatalog/HomeCatalog";
import HomeBody from "../../components/HomeBody/HomeBody";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="homePage centered">
      <Navbar />
      <Carousel />
      <HomeCatalog />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default HomePage;
