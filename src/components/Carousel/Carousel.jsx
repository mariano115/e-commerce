import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../../images/carousel/prueba/carousel1.jpg";
import imagen2 from "../../images/carousel/prueba/carousel2.png";
import imagen3 from "../../images/carousel/prueba/carousel3.jpg";

const CarouselItem = () => {
  return (
    <div className="carrousel">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="carrousel-item" src={imagen1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="carrousel-item" src={imagen2} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="carrousel-item" src={imagen3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselItem;
