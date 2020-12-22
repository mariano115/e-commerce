import LoginComponent from "../../components/Login/Login";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <button className="buttonClass right">Volver</button>

      <div className="loginPageBox centered">
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
