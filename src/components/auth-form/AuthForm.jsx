import React, { useState } from "react";
import "./auth-form.css";
import SignInForm from "../signin-form/SignInForm";

const AuthForm = ({ onClose }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <div className="auth">
      <div style={{ zIndex: "10" }}>
        {showSignIn ? null : (
          <SignInForm onSwitch={() => setShowSignIn(!showSignIn)} />
        )}
      </div>
      <div
        onClick={() => onClose()}
        style={{ height: "100vh", width: "100%", position: "absolute" }}
      ></div>
    </div>
  );
};

export default AuthForm;
