import LeftMenu from "../left-menu/LeftMenu";
import "./AppHeader.css";
import logo from "../../img/logo+name.svg";
import { Link } from "react-router-dom";

function AppHeader({ onOpen }) {
  return (
    <div className="all-header">
      <div className="downstream-header container">
        <Link to={"/"}>
          <img src={logo} height={"200px"} />
        </Link>
        <div className="info-div">
          <Link to="#">Отзывы</Link>
          <Link to="/price">Стоимость</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/support">Поддержка</Link>
          <Link to="#">Блог</Link>
        </div>
        <div className="login-div">
          <button onClick={() => onOpen()}>Вход / Регистрация</button>
        </div>
        <LeftMenu id="left-menu" onOpen={() => onOpen()} />
      </div>
    </div>
  );
}

export default AppHeader;
