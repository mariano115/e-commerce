import LoginComponent from "../../components/Login/Login";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="loginPage centered">
      <div className="loginPageBox centered">
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
