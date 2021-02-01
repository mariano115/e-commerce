import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UploadFoto from "../../components/UploadFoto/UploadFoto";
import "./Productos.css";

const ProductosPage = () => {
  return (
    <div className="productosPage ">
      <Navbar />
      <UploadFoto />
      <Footer />
    </div>
  );
};

export default ProductosPage;
