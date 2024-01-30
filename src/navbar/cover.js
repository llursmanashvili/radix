import { useEffect, useState } from "react";
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
      {matches && <img className="cover" src={cover1} />}
      {!matches && <img className="cover" src={cover} />}
    </div>
  );
}
export default Cover;
