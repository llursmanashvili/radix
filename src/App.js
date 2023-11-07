import logo from "./logo.svg";
import { Navbar, Navbaren } from "./navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<Navbar />]} />
        <Route path="/en" element={[<Navbaren />]} />
      </Routes>
    </div>
  );
}

export default App;
