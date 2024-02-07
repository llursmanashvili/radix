import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cover from "./cover2.png";
import cover1 from "./Cover.jpg";

import "./cover.css";

function Cover() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div>
      {matches && (
        <div className="regcontainer">
          {" "}
          <img className="cover" src={cover1} />{" "}
          <Link to="/registration">
            <button className="bottom-left">რეგისტრაცია</button>{" "}
          </Link>
        </div>
      )}
      {!matches && (
        <div className="regcontainer">
          {" "}
          <img className="cover" src={cover} />{" "}
          <Link to="/registration">
            <button className="bottom-left">რეგისტრაცია</button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
}
function Coveren() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div>
      {matches && (
        <div className="regcontainer">
          {" "}
          <img className="cover" src={cover1} />{" "}
          <Link to="/registrationen">
            <button className="bottom-left">Registration</button>{" "}
          </Link>
        </div>
      )}
      {!matches && (
        <div className="regcontainer">
          {" "}
          <img className="cover" src={cover} />{" "}
          <Link to="/registrationen">
            <button className="bottom-left">Registration</button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
}
export { Cover, Coveren };
