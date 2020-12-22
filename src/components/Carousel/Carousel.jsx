import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselItem = () => {
  return (
    <div className="carrousel">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="carrousel-item"
            src="https://media.gq.com.mx/photos/5cb0413c928217452b4aed19/16:9/w_1920,c_limit/Tailored%202.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="carrousel-item"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camisa-de-len-ador-1573484651.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="carrousel-item"
            src="https://cdn-3.expansion.mx/dims4/default/be1804f/2147483647/strip/true/crop/630x331+0+85/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fgex.lifeandstyle%2Fuploads%2Fasset%2Fasset_file%2F3816%2Faideee.png"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselItem;
