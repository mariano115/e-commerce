import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
//import UploadFoto from "../../components/UploadFoto/UploadFoto";
import "./Productos.css";
import UploadImages from "../../components/UploadImages/UploadImages";
import ProductsGallery from "../../components/ProductsGallery/ProductsGallery";

const ProductosPage = () => {
  return (
    <div className="productosPage ">
      <Navbar />
      <UploadImages />
      <ProductsGallery />
      <Footer />
    </div>
  );
};

export default ProductosPage;
