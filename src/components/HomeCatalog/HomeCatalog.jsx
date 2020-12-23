import "./HomeCatalog.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lisa from "../../images/catalogHome/lisa.png";
import ratier from "../../images/catalogHome/ratier.png";
import sport from "../../images/catalogHome/sport.png";
import { Link } from "react-router-dom";

const HomeCatalog = () => {
  return (
    <div className="catalog">
      <Container>
        <Row className="container">
          <div class="responsive">
            <Col xs={6} md={4}>
              <Image src={lisa} rounded className="catalogFotos" />
            </Col>
          </div>
          <div class="responsive">
            <Col xs={6} md={4}>
              <Image src={ratier} rounded className="catalogFotos" />
            </Col>
          </div>
          <div class="responsive">
            <Col xs={6} md={4}>
              <Image src={sport} rounded className="catalogFotos" />
            </Col>
          </div>
        </Row>
      </Container>
      <div className="second">
        <Link to="/">
          <button className="buttons">Ir a Catalogo</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCatalog;
