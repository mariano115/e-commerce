import "./UploadImages.css";
import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
/*import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lisa from "../../images/catalogHome/lisa.webp";
import ratier from "../../images/catalogHome/ratier.webp";
import sport from "../../images/catalogHome/sport.webp";
import { Link } from "react-router-dom";*/

const UploadImages = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/webp"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png, jpeg or webp)");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadImages;
