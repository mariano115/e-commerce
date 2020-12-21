import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="homePage centered">
      <div>
        <Navbar />
      </div>
      <div className="loginPageBox centered"></div>
    </div>
  );
};

export default HomePage;
