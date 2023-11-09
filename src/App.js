import logo from "./logo.svg";
import { Navbar, Navbaren } from "./navbar/Navbar";
import "./App.css";
import { About, Abouten } from "./aboutus/about";
import Footer from "./footer";
import { Routes, Route } from "react-router-dom";
import Structure from "./structure/structure";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<Navbar />]} />
        <Route path="/aboutus" element={[<Navbar />, <About />, <Footer />]} />
        <Route
          path="/aboutusen"
          element={[<Navbaren />, <Abouten />, <Footer />]}
        />
        <Route
          path="/structure"
          element={[<Navbaren />, <Structure />, <Footer />]}
        />

        <Route path="/en" element={[<Navbaren />]} />
      </Routes>
    </div>
  );
}

export default App;
