import { Link } from "react-router-dom";
import "./registration.css";
import { MDBIcon } from "mdb-react-ui-kit";
import { useEffect } from "react";
export function Registration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText("GE47BG0000000874599300");
      alert("Copied to clipboard!");
    } catch (err) {
      alert("Copy to clipboard failed.");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "5%",
      }}
    >
      <h2 className="title">კონგრესზე რეგისტრაციის პირობები: </h2>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <div className="regcard">
          <h4 className="early"> ადრეული რეგისტრაცია 15.03.24 ჩათვლით</h4>
          <p> ექიმები-360GEL (5 კაციანი ჯგუფი - 290GEL)</p>{" "}
          <p> სტუდენტები-150GEL</p>
        </div>
        <div className="regcard">
          <h4 className="early"> დაგვიანებული რეგისტრაცია 15.04.24 ჩათვლით</h4>{" "}
          <p>ექიმები-450GEL (5 კაციანი ჯგუფი - 390GEL) </p>{" "}
          <p>სტუდენტები-200GEL </p>{" "}
        </div>
        <div className="regcard">
          {" "}
          <h4 className="early">საბანკო ინფორმაცია</h4>{" "}
          <p> მიმღები ბანკი – ს.ს. საქართველოს ბანკი</p>{" "}
          <p>ბანკის კოდი: BAGAGE22 </p>{" "}
          <p>
            მიმღები ანგარიშის ნომერი: GE47BG0000000874599300{" "}
            <MDBIcon
              style={{ cursor: "pointer" }}
              onClick={handleCopyClick}
              fas
              icon="copy"
              size="lg"
            />
          </p>
          <p> ბენეფიციარი: სამეცნიერო-კვლევითი ცენტრი რადიქსი </p>{" "}
          <p> დანიშნულებაში თქვენი სახელი და გვარი მიუთითეთ! </p>
        </div>

        <p
          style={{
            padding: "1%",
            textAlign: "center",
          }}
        >
          {" "}
          <h3 style={{ marginBottom: "9%", marginTop: "6%" }}>
            <Link
              className="regbutton"
              to="https://docs.google.com/forms/d/e/1FAIpQLSf9MHE-7Po7mP9togYYMNgG3jL0CEnrmFf7PocnwtjK4Gc_9w/viewform"
            >
              სარეგისტრაციო ფორმა
            </Link>{" "}
          </h3>
          <h3 style={{ lineHeight: "1.5" }}>
            {" "}
            წარმატებებს გისურვებთ, დამატებითი კითხვების შემთხვევაში
            <Link to="/contact"> დაგვიკავშირდით</Link>
          </h3>
        </p>
      </div>
    </div>
  );
}
export function Registrationen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText("GE47BG0000000874599300");
      alert("Copied to clipboard!");
    } catch (err) {
      alert("Copy to clipboard failed.");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "5%",
      }}
    >
      <h2 className="title">The congress registration and conditions: </h2>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <div className="regcard">
          <h4 className="early"> Early registration including 15.03.24</h4>
          <p> Doctors-360 GEL (group of 5 people - 290 GEL)</p>{" "}
          <p> Students-150 GEL</p>
        </div>
        <div className="regcard">
          <h4 className="early">Late registration including 15.04.24</h4>{" "}
          <p>Doctors-450 GEL (group of 5 people - 390 GEL) </p>{" "}
          <p>Students-200 GEL </p>{" "}
        </div>
        <div className="regcard">
          {" "}
          <h4 className="early">Payment information</h4>{" "}
          <p> Receiving bank – S.S. Bank of Georgia</p>{" "}
          <p>Bank code: BAGAGE22 </p>{" "}
          <p>
            Receiving account number: GE47BG0000000874599300{" "}
            <MDBIcon
              style={{ cursor: "pointer" }}
              onClick={handleCopyClick}
              fas
              icon="copy"
              size="lg"
            />
          </p>
          <p> Beneficiary: scientific-research center Radix </p>{" "}
          <p> Enter your name and surname in the destination!</p>
        </div>

        <p
          style={{
            padding: "1%",
            textAlign: "center",
          }}
        >
          {" "}
          <h3 style={{ marginBottom: "9%", marginTop: "6%" }}>
            <Link
              className="regbutton"
              to="https://docs.google.com/forms/d/e/1FAIpQLSf9MHE-7Po7mP9togYYMNgG3jL0CEnrmFf7PocnwtjK4Gc_9w/viewform"
            >
              Registration Form
            </Link>{" "}
          </h3>
          <h3 style={{ lineHeight: "1.5" }}>
            {" "}
            Good luck,if you have any additional questions{" "}
            <Link to="/contacten"> contact us</Link>
          </h3>
        </p>
      </div>
    </div>
  );
}
