import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/header/AppHeader";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./pages/user-page/UserPage";
import FeedbackPage from "./components/FeedbackPage/FeedbackPage.jsx"
import Price from "./components/Price/Price.jsx";
import FAQ from "./components/Faq/Faq.jsx";
import Support from "./components/support/Support.jsx";
import Policy from "./components/Policy/Policy.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import Leadership from "./components/Leadership/Leadership.jsx";
import Terms from "./components/Terms/Terms.jsx";
import Cookies from "./components/Cookies/Cookies.jsx";

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
            <Route path={"/how-it-works"} element={<Leadership />} />
            <Route path={"/terms-of-use"} element={<Terms />} />
            <Route path={"/cookies"} element={<Cookies />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
