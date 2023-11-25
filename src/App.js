import { useState } from "react";
import "./App.css";
import Compat from "./components/Compatibility/Compat";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./components/header-section/HeaderSection";
import AppHeader from "./components/header/AppHeader";
import Amount from "./components/Amounts/Amount";
import AuthForm from "./components/auth-form/AuthForm";
import Bitcoin from "./components/Bitcoin/Bitcoin";
import Footer from "./components/footer/Footer";
import Alert from "./components/alert/Alert";
import Loading from "./components/loading/Loading";
import ErrorAlert from "./components/error-alert/ErrorAlert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./pages/user-page/UserPage";
import FeedbackPage from "./components/FeedbackPage/FeedbackPage.jsx"
import Price from "./components/Price/Price.jsx";
import FAQ from "./components/Faq/Faq.jsx";
import Support from "./components/support/Support.jsx";
import Policy from "./components/Policy/Policy.jsx";
import HomePage from "./pages/home/HomePage.jsx";

function App() {
  const [openAuth, setOpenAuth] = useState(false);
  return (
    <>
      <Router>
        <AppHeader onOpen={() => setOpenAuth(true)}/>
        <Routes>
          <Route path={"/"} element={<HomePage />}/>    
          <Route path={"/profile"} element={<UserPage />} />
          <Route path={"/tariff"} element={<FeedbackPage />} />
          <Route path={"/price"} element={<Price />} />
          <Route path={"/faq"} element={<FAQ />} />
          <Route path={"/support"} element={<Support />} />
          <Route path={"/policy-privacy"} element={<Policy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
