import "./App.css";
import Compat from "./components/Compatibility/Compat";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./components/header-section/HeaderSection";
import AppHeader from "./components/header/AppHeader";
import Amount from "./components/Amounts/Amount";
import AuthForm from "./components/auth-form/AuthForm";
import { useState } from "react";
import Bitcoin from "./components/Bitcoin/Bitcoin";
import Footer from "./components/footer/Footer";
import Alert from "./components/alert/Alert";
import Loading from "./components/loading/Loading";

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {openAuth && <AuthForm onClose={() => setOpenAuth(false)} />}
      {openAlert && <Alert />}
      {loading && <Loading />}
      <AppHeader onOpen={() => setOpenAuth(true)} />
      <HeaderSection onHacking={() => setLoading(true)}/>
      <Compat />
      <Amount />
      <Bitcoin />
      <Footer />
    </>
  );
}

export default App;
