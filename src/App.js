import { useState, useEffect } from "react";
import { Navbar, Navbaren } from "./navbar/Navbar";
import "./App.css";
import Cover from "./navbar/cover";
import { AuthContextProvider } from "./registration/authcontext";
import { About, Abouten } from "./aboutus/about";
import Footer from "./footer";
import { Contact, Contacten } from "./contact/contact";
import { Routes, Route } from "react-router-dom";
import { Structureen, Structure } from "./structure/structure";
import Paralax from "./main/main";
import Form from "./registration/regi/form";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
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
            element={[<Navbaren />, <Cover />, <Paralax />, <Footer />]}
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
          <Route path="/signin" element={[<Navbar />, <Form />, <Footer />]} />
        </Routes>
      )}
    </div>
  );
}

export default App;
