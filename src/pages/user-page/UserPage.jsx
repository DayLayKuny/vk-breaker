import React, { useEffect } from "react";

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
