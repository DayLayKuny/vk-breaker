import React from "react";
import "./url-search.css";
import { useForm } from "react-hook-form";

const UrlSearch = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  return (
    <div className="url-search">
      <h1>Доступ к аккаунту Вконтакте</h1>
      <h3>введите Адрес страницы к которому нужен доступ </h3>
      <div style={{ display: "flex" }}>
        <input
          type="url"
          className="search-inpt"
          placeholder="https://vk.com/id123456"
          {...register("searchUrl", {
            required: true
          })}
        />
        <button className="search-btn">Найти</button>
      </div>
    </div>
  );
};

export default UrlSearch;
