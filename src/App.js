import "./App.css";
import Compat from "./components/Compatibility/Compat";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./components/header-section/HeaderSection";
import AppHeader from "./components/header/AppHeader";
import Amount from "./components/Amounts/Amount";
import AuthForm from "./components/auth-form/AuthForm";
import { useState } from "react";

function App() {
  const [openAuth, setOpenAuth] = useState(true);

  return (
    <>
      {openAuth && <AuthForm onClose={() => setOpenAuth(false)}/>}
      <AppHeader onOpen={() => setOpenAuth(true)}/>
      <HeaderSection />
      <Compat />
      <Amount />
    </>
  );
}

export default App;
