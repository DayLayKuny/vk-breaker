import React, { useState } from "react";
import "./loading.css";
import Alert from "../alert/Alert";

const Loading = () => {
  const [load, setLoad] = useState(true);

  setInterval(() => {
    setLoad(false);
  }, "5300");

  return (
    <>
      {load ? (
        <div className="loading">
          <div>
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <Alert />
      )}
    </>
  );
};

export default Loading;
