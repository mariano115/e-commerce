import "./Contacto.css";
import React, { useState } from "react";
import contactImage from "../../images/contacto.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [firstName, setfirstName] = useState("");
  const [secondName, setsecondName] = useState("");
  const [email, setemail] = useState("");
  const [mesaje, setmesaje] = useState("");

  const onChangefirstName = (e) => {
    const firstName = e.target.value;
    setfirstName(firstName);
  };

  const onChangesecondName = (e) => {
    const secondName = e.target.value;
    setsecondName(secondName);
  };

  const onChangeemail = (e) => {
    const email = e.target.value;
    setemail(email);
  };

  const onChangemesaje = (e) => {
    const mesaje = e.target.value;
    setmesaje(mesaje);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "firstName: " +
        firstName +
        " secondName: " +
        secondName +
        " email: " +
        email +
        " mesaje: " +
        mesaje
    );
  };

  return (
    <div className="contactContainer">
      <div>
        <img
          src={contactImage}
          alt="Imagen de contacto"
          className="contactImage"
        />
      </div>
      <div class="contactText">
        <p>
          Si tenés alguna duda o comentario o simplemente querés recibir más
          información sobre los productos de Porthos, por favor completá el
          siguiente formulario y te atenderemos lo antes posible.
        </p>
      </div>
      <div className="contactForm">
        <form>
          <div className="inputDivContact">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={firstName}
              onChange={onChangefirstName}
            />
          </div>
          <div className="inputDivContact">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="secondName"
              value={secondName}
              onChange={onChangesecondName}
            />
          </div>
          <div className="inputDivContact">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={onChangeemail}
            />
          </div>
          <div className="inputDivContact">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              name="mesaje"
              value={mesaje}
              onChange={onChangemesaje}
            />
          </div>
          <div className="buttonContact">
            <Button
              variant="success"
              type="submit"
              onClick={handleSubmit}
              className="buttons"
            >
              Inrgesar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
