import LeftMenu from "../left-menu/LeftMenu";
import "./AppHeader.css";
import logo from '../../img/logo+name.svg'

function AppHeader() {
  return (
    <div className="all-header">
      <div className="downstream-header container">
        <img src={logo} height={'300px'}/>
        <div className="info-div">
          <a href="#">Отзывы</a>
          <a href="#">Блог</a>
          <a href="#">Политика Конфиденциальности</a>
          <a href="#">О Нас </a>
          <a href="#">Контакты</a>
        </div>
        <div className="login-div">
          <button>Вход / Регистрация</button>
        </div>
        <LeftMenu id="left-menu" />
      </div>
    </div>
  );
}

export default AppHeader;
