import React from "react";
import useFirestore from "../../hooks/useFirestore";

const ProductsGallery = () => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return <div className="img-grid">images</div>;
};

export default ProductsGallery;
