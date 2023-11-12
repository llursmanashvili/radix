import logo from "./logo.svg";
import { Navbar, Navbaren } from "./navbar/Navbar";
import "./App.css";
import { About, Abouten } from "./aboutus/about";
import Footer from "./footer";
import { Contact, Contacten } from "./contact/contact";
import { Routes, Route } from "react-router-dom";
import { Structureen, Structure } from "./structure/structure";
import Paralax from "./main/main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<Navbar />, <Paralax />]} />
        <Route path="/aboutus" element={[<Navbar />, <About />, <Footer />]} />
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
        />
        <Route path="/en" element={[<Navbaren />, <Paralax />]} />
      </Routes>
    </div>
  );
}

export default App;
