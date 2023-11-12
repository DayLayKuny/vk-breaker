import React from "react";
import "./header-section.css";
// import Achievements from "../achievements/Achievements";
import { MdOutlineDoneOutline } from "react-icons/md"
import UrlSearch from "../url-search/UrlSearch";

const HeaderSection = () => {
  return (
    <div className="header-section">
      <div className="header-section-text container">
        <div className="texts">
          <p className="header">Как взломать Вконтакте ?</p>
          <p>
            <b style={{ color: "#7D35D7FF" }}>VK-Breaker</b> лучший и самый
            эффективный на сегодняшний день, вариант взлома социальной сети
            ВКонтакте. Вы сможете с нового устройства авторизоваться, и при этом
            владелец аккаунта ничего не заметит, потому что сессия взлома
            работает исключительно в фоновом режиме.
          </p>
        <UrlSearch />
          <div className="done-div">
            <div><MdOutlineDoneOutline className="donefa"/><p className="doneitems">Пароль не меняется после взлома</p></div>
            <div><MdOutlineDoneOutline className="donefa"/><p className="doneitems">Гарантия полной анонимности</p></div>
            <div><MdOutlineDoneOutline className="donefa"/><p className="doneitems">Полный доступ к аккаунту с любого устройства</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
