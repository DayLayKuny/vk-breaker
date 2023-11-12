import React from "react";
import "./url-search.css";

const UrlSearch = () => {
  return (
    <div>
      <h1>Доступ к аккаунту Вконтакте</h1>
      <h3>введите Адрес страницы к которому нужен доступ </h3>
      <input type="url" className="search-inpt"/>
      <button className="search-btn">Найти</button>
    </div>
  );
};

export default UrlSearch;
