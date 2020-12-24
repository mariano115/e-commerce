import "./HomeBody.css";
import nosotrosCamisaFoto from "../../images/nosotrosImagenCamisa.png";
import Jumbotron from "react-bootstrap/Jumbotron";

const HomeBody = () => {
  return (
    <div className="homeBody">
      <section>
        <h2>Inicio</h2>
        <p>
          Con mas de 30 años dedicados a la fabriación de camisas para hombres,
          se distingue por un producto de calidad y buen gusto.
        </p>
      </section>
      <section>
        <div>
          <img src={nosotrosCamisaFoto} alt="Camisa" />
        </div>
      </section>
      <section>
        <h2>Nosotros</h2>
        <p>
          Somos fabricantes de camisas para hombres con más de 30 años de
          experiencia en el mercado.
        </p>
        <p>
          En Porthos, contamos con una destacada producción textil orientada a
          la calidad y el diseño que nos permite abastecer a una importante
          demanda de comercios ubicados en la Ciudad de Buenos Aires y GBA.
        </p>
        <p>Nos encontramos realizando envíos a todo el interior del país.</p>
      </section>
      <section>
        <h2>Producción</h2>
        <ul>
          <li>Producción calidad y diseño elegante</li>
        </ul>
        <ul>
          <li>Producto en comercio y puntos de ventas</li>
        </ul>
        <ul>
          <li>Revisión de la demanda</li>
        </ul>
        <ul>
          <li>Revisión de la producción</li>
        </ul>
      </section>

      <section>
        <h2>Comercialización</h2>
        <p>Ventas de camisas por mayor.</p>
        <p>
          A través de una política de Comercialización totalmente personalizada
          nos dirigimos al comerciante de ropa de Capital, Gran Buenos Aires e
          interior del país. Por este motivo, estamos principalmente orientados
          hacia una venta de camisas por mayor que tienda a satisfacer las
          necesidades de los comerciantes de ropa de vestir y sport
        </p>
        <p>
          Consulte nuestros volúmenes de compra mínima de camisas por mayor y
          las condiciones de contratación para hacerle llegar su pedido.
        </p>
      </section>
    </div>
  );
};

export default HomeBody;
