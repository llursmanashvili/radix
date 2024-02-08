import { useState, useEffect } from "react";
import { Navbar, Navbaren } from "./navbar/Navbar";
import "./App.css";
import { Cover, Coveren } from "./navbar/cover";
import { About, Abouten } from "./aboutus/about";
import Footer from "./footer";
import { Contact, Contacten } from "./contact/contact";
import { Routes, Route } from "react-router-dom";
import { Structureen, Structure } from "./structure/structure";
import { Paralax, Paralaxen } from "./main/main";
import ClipLoader from "react-spinners/ClipLoader";
import { Registration, Registrationen } from "./registration/registration";
import { Speakers, Speakersen } from "./speakers/speakers";
import ReactGA from "react-ga";

import { Speakerdetail, Speakerdetailen } from "./speakers/speakerinfo";
function initizeAnalytics() {
  ReactGA.initialize("UA-250256038-1");
  ReactGA.pageview("/HomePage");
}
function App() {
  initizeAnalytics();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const override = {
    marginTop: "300px",
  };
  return (
    <div className="App">
      {loading ? (
        <ClipLoader
          cssOverride={override}
          color="#2c5194"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Routes>
          <Route
            path="/"
            element={[<Navbar />, <Cover />, <Paralax />, <Footer />]}
          />
          <Route
            path="/en"
            element={[<Navbaren />, <Coveren />, <Paralaxen />, <Footer />]}
          />
          <Route
            path="/aboutus"
            element={[<Navbar />, <About />, <Footer />]}
          />
          <Route
            path="/aboutusen"
            element={[<Navbaren />, <Abouten />, <Footer />]}
          />
          <Route
            path="/structure"
            element={[<Navbar />, <Structure />, <Footer />]}
          />
          <Route
            path="/structureen"
            element={[<Navbaren />, <Structureen />, <Footer />]}
          />{" "}
          <Route
            path="/contact"
            element={[<Navbar />, <Contact />, <Footer />]}
          />
          <Route
            path="/contacten"
            element={[<Navbaren />, <Contacten />, <Footer />]}
          />{" "}
          <Route
            path="/registration"
            element={[<Navbar />, <Registration />, <Footer />]}
          />{" "}
          <Route
            path="/registrationen"
            element={[<Navbaren />, <Registrationen />, <Footer />]}
          />{" "}
          <Route
            path="/speakers"
            element={[<Navbar />, <Speakers />, <Footer />]}
          />{" "}
          <Route
            path="/speakers/:link"
            element={[<Navbar />, <Speakerdetail />, <Footer />]}
          />{" "}
          <Route
            path="/speakeren"
            element={[<Navbaren />, <Speakersen />, <Footer />]}
          />{" "}
          <Route
            path="/speakeren/:link"
            element={[<Navbaren />, <Speakerdetailen />, <Footer />]}
          />{" "}
        </Routes>
      )}
    </div>
  );
}

export default App;
