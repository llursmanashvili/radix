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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<Navbar />, <Cover />, <Paralax />]} />
        <Route path="/en" element={[<Navbaren />, <Cover />, <Paralax />]} />
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
        />{" "}
        <Route path="/signin" element={[<Navbar />, <Form />, <Footer />]} />
      </Routes>
    </div>
  );
}

export default App;
