import React from "react";
import "./url-search.css";

const UrlSearch = () => {
  return (
    <div className="url-search">
      <h1>Доступ к аккаунту Вконтакте</h1>
      <h3>введите Адрес страницы к которому нужен доступ </h3>
      <div>
        <input type="url" className="search-inpt" placeholder="https://vk.com/id123456"/>
        <button className="search-btn">Найти</button>
      </div>
    </div>
  );
};

export default UrlSearch;
