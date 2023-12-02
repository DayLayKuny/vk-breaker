import React, { useState } from "react";
import "./loading.css";
import Alert from "../alert/Alert";
import App from "./nothing/loapp";

const Loading = () => {
  const [load, setLoad] = useState(true);

  setInterval(() => {
    setLoad(false);
  }, "55000");

  return (
    <>
      {load ? (
        <div className="loading">
          <div>
            <div className="loader">
              <div class="loader-bar">
                <div class="block-border"></div>
                <div class="block-border"></div>
                <div class="block-border"></div>
                <div class="block-border"></div>
                <div class="block-border"></div>
                <div class="block-border"></div>
                <div class="block-border"></div>
                <div class="block-border"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
                <div class="block-meter"></div>
              </div>
            </div>
            <App />
          </div>
        </div>
      ) : (
        <Alert />
      )}
        <script src="Loading.js"></script>
    </>
  );
};

export default Loading;
