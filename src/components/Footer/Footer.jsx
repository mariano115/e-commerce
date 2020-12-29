import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="containerFooter">
        <div className="footerContent">
          <div>
            <NavLink
              className="logo-itemFooter"
              activeClassName="is-active"
              to="/"
            >
              Porthos
            </NavLink>
          </div>
          <p>
            Las colecciones Porthos llevan en su ADN todo el conocimiento y la
            tradición de una marca histórica de la Argentina en indumentaria
            masculina. Descubrí todo lo nuevo que propone este clásico que se
            renueva con cada una de sus colecciones
          </p>
        </div>
        <div className="redirectBox">
          <ul>
            <li className="redirectFooter">
              <a href="/">Contacto</a>
            </li>
            <li className="redirectFooter">
              <a href="/">Formas de pago</a>
            </li>
            <li className="redirectFooter">
              <a href="/">contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2020 Porthos. Todos los derechos reservados</p>
        <p>Contacto: contacto@porthoscamisas.com.ar</p>
        <p>Telefono: 4671 4902</p>
      </div>
    </div>
  );
};

export default Footer;
