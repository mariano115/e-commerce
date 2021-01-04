import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../images/carousel/prueba/carousel1.webp";
import carousel2 from "../../images/carousel/prueba/carousel2.webp";
import carousel3 from "../../images/carousel/prueba/carousel3.webp";

const CarouselItem = () => {
  return (
    <div className="carrousel">
      <Carousel>
        <Carousel.Item interval={3000}>
          <picture>
            <img className="carrousel-item" src={carousel1} alt="Alt text" />
          </picture>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <picture>
            <img className="carrousel-item" src={carousel2} alt="Alt text" />
          </picture>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <picture>
            <img className="carrousel-item" src={carousel3} alt="Alt text" />
          </picture>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselItem;
