import "./HomeCatalog.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lisa from "../../images/catalogHome/lisa.webp";
import ratier from "../../images/catalogHome/ratier.webp";
import sport from "../../images/catalogHome/sport.webp";
import { Link } from "react-router-dom";

const HomeCatalog = () => {
  return (
    <div className="catalog">
      <Container>
        <Row className="container">
          <div className="responsive">
            <Col xs={6} md={4}>
              <picture>
                <img
                  className="catalogFotos"
                  src={lisa}
                  alt="Camisa de vestir lisa"
                />
              </picture>
            </Col>
          </div>
          <div className="responsive">
            <Col xs={6} md={4}>
              <picture>
                <img
                  className="catalogFotos"
                  src={ratier}
                  alt="Camisa de vestir ratier"
                />
              </picture>
            </Col>
          </div>
          <div className="responsive">
            <Col xs={6} md={4}>
              <picture>
                <img className="catalogFotos" src={sport} alt="Camisa sport" />
              </picture>
            </Col>
          </div>
        </Row>
      </Container>
      <div className="second">
        <Link to="/productos" className="botonCatalogo">
          <button className="buttons">Ir a Catalogo</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCatalog;
