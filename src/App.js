import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/header/AppHeader";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./pages/user-page/UserPage";
import FeedbackPage from "./components/FeedbackPage/FeedbackPage.jsx";
import Price from "./components/Price/Price.jsx";
import FAQ from "./components/Faq/Faq.jsx";
import Support from "./components/support/Support.jsx";
import Policy from "./components/Policy/Policy.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import Leadership from "./components/Leadership/Leadership.jsx";
import Terms from "./components/Terms/Terms.jsx";
import CookiesPage from "./components/Cookies/CookiesPage.jsx";
import User from "./components/User/User.jsx";
import axios from "axios";
import AppLoader from "./components/app-loader/AppLoader.jsx";
import Cookies from "js-cookie";

function App() {
  useEffect(() => {
    const cookieValue = Cookies.get("token");
    axios
      .get("http://127.0.0.1:5000/api/v4/get_blogs")
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
    if (cookieValue != undefined) {
      axios
        .post("http://127.0.0.1:5000/user/api/v4/get_user_data", {
          headers: {
            "Content-Type": "application/json",
          },
          token: "$2b$12$kec9vXpBGFv8dM1DtG.fFuta9WQAckrwIQE0Fct.VLVstnWwHbZQ.",
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, []);
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(true);
  const [openAuth, setOpenAuth] = useState(true);
  return (
    <>
      {loader ? (
        <AppLoader />
      ) : (
        <Router>
          <AppHeader
            onOpen={() => setOpenAuth(true)}
            open={openAuth}
            onClose={() => setOpenAuth(false)}
          />
          <Routes>
            <Route
              path={"/"}
              element={
                <HomePage
                  openAuth={openAuth}
                  onOpenAuth={() => setOpenAuth(false)}
                />
              }
            />
            <Route path={"/profile"} element={<UserPage />} />
            <Route path={"/tariff"} element={<FeedbackPage />} />
            <Route
              path={"/price"}
              element={
                <Price
                  openAuth={openAuth}
                  onOpenAuth={() => setOpenAuth(false)}
                />
              }
            />
            <Route
              path={"/faq"}
              element={
                <FAQ
                  openAuth={openAuth}
                  onOpenAuth={() => setOpenAuth(false)}
                />
              }
            />
            <Route
              path={"/support"}
              element={
                <Support
                  openAuth={openAuth}
                  onOpenAuth={() => setOpenAuth(false)}
                />
              }
            />
            <Route
              path={"/policy-privacy"}
              element={
                <Policy
                  openAuth={openAuth}
                  onOpenAuth={() => setOpenAuth(false)}
                />
              }
            />
            <Route
              path={"/how-it-works"}
              element={
                <Leadership
                  openAuth={openAuth}
                  onOpenAuth={() => setOpenAuth(false)}
                />
              }
            />
            <Route path={"/terms-of-use"} element={<Terms />} />
            <Route path={"/cookies"} element={<CookiesPage />} />
            <Route path={"/user"} element={<User />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
