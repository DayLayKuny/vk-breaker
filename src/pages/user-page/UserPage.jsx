import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const UserPage = () => {

  useEffect(() => {
    if (true) {
      window.location = 'localhost:3000'
    }
  }, [])

  return (
    <>
      <p>mher</p>
    </>
  );
};

export default UserPage;
