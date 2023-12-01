import React, { useState } from "react";
import "./loading.css";
import Alert from "../alert/Alert";
import YourComponent from "./nothing/mycomp"

const Loading = () => {
  const [load, setLoad] = useState(true);

  setInterval(() => {
    setLoad(false);
  }, "15000");

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
            <YourComponent  />
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
