import "./App.css";
import Compat from "./components/Compatibility/Compat";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./components/header-section/HeaderSection";
import AppHeader from "./components/header/AppHeader";
import Amount from "./components/Amounts/Amount";
import AuthForm from "./components/auth-form/AuthForm";
import { useState } from "react";
import Bitcoin from "./components/Bitcoin/Bitcoin";

function App() {
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <>
      {openAuth && <AuthForm onClose={() => setOpenAuth(false)}/>}
      <AppHeader onOpen={() => setOpenAuth(true)}/>
      <HeaderSection />
      <Compat />
      <Amount />
      <Bitcoin />
    </>
  );
}

export default App;
