import "./HomeBody.css";
import nosotrosCamisaFoto2 from "../../images/nosotrosImagenCamisa2.png";

const HomeBody = () => {
  return (
    <div>
      <div className="homeBody">
        <section>
          <h2>Inicio</h2>
          <p>
            Con mas de 30 años dedicados a la fabriación de camisas para
            hombres, se distingue por un producto de calidad y buen gusto.
          </p>
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
          <h2>Comercialización</h2>
          <p>Ventas de camisas por mayor.</p>
          <p>
            A través de una política de Comercialización totalmente
            personalizada nos dirigimos al comerciante de ropa de Capital, Gran
            Buenos Aires e interior del país. Por este motivo, estamos
            principalmente orientados hacia una venta de camisas por mayor que
            tienda a satisfacer las necesidades de los comerciantes de ropa de
            vestir y sport
          </p>
          <p>
            Consulte nuestros volúmenes de compra mínima de camisas por mayor y
            las condiciones de contratación para hacerle llegar su pedido.
          </p>
        </section>
        <section className="camisa">
          <img src={nosotrosCamisaFoto2} alt="Camisa" />
        </section>
        <section className="produccionTitle">
          <h2>Producción</h2>
        </section>
      </div>
      <section className="produccion">
        <div>
          <p> Producción calidad y diseño elegante</p>
        </div>
        <div>
          <p> Producto en comercio y puntos de ventas</p>
        </div>
        <div>
          <p> Revisión de la demanda y Revisión de la producción</p>
        </div>
      </section>
    </div>
  );
};

export default HomeBody;
