import React, { useRef, useEffect, useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./contact.css";
import "react-native";
import call from "react-native-phone-call/index";
import { MDBIcon } from "mdb-react-ui-kit";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBTextArea,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// npm i @emailjs/browser
const libraries = ["places"];
const mapContainerStylee = {
  width: "50vh",
  height: "60vh",
};
const mapContainerStyle = {
  width: "130vh",
  height: "60vh",
};
const center = {
  lat: 41.71191268024096, // default latitude
  lng: 44.75611613893036, // default longitude
};
const Contact = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const form = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC1ICqmw5FPn_8bKJCzqduZrnTwZSGlCPE",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_alquulo",
        "template_ifdy3q7",
        form.current,
        "6eHxUfxxTjlUvb2kJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const triggercall = () => {
    const args = {
      number: "  +995558901121", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const triggercall1 = () => {
    const args = {
      number: "+995593937798", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <>
      <div className="email">
        {" "}
        <div className="contact2">
          {matches && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={15}
              center={center}
            >
              <MarkerF position={center} />
            </GoogleMap>
          )}
          {!matches && (
            <GoogleMap
              mapContainerStyle={mapContainerStylee}
              zoom={15}
              center={center}
            >
              <MarkerF position={center} />
            </GoogleMap>
          )}
        </div>
        <div className="contact1">
          <div
            style={{
              display: "flex",
              margin: "50px",
              marginLeft: "-8%",
              justifyContent: "left",
              flexDirection: "column",
            }}
          >
            <button className="icon" onClick={triggercall}>
              <MDBIcon
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  marginBottom: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: " 5px",
                  borderRadius: "50%",
                  borderStyle: "solid",
                  borderWidth: "3px",
                }}
                className="me-2"
                fas
                icon="phone-volume"
              />
              <h1> +995558901121 </h1>
            </button>
            <button className="icon" onClick={triggercall1}>
              <MDBIcon
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: " 5px",
                  borderRadius: "50%",
                  borderStyle: "solid",
                  borderWidth: "3px",
                }}
                className="me-2"
                fas
                icon="phone-volume"
              />
              <h1> +995593937798</h1>
            </button>
          </div>
          <div
            style={{
              display: "flex",
              margin: "50px",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Link to="https://maps.app.goo.gl/kiq98MSkDNAq5KRy5">
              <button className="icon">
                <MDBIcon
                  className="me-2"
                  fas
                  icon="map-marker-alt"
                  style={{
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: " 8px",
                    borderRadius: "50%",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    width: "50px",
                  }}
                />
                <h2> Pullman Tbilisi Axis Towers </h2>
              </button>{" "}
            </Link>
            <Link to="mailto:radix.ge@gmail.com">
              <button className="icon">
                <MDBIcon
                  className="me-2"
                  fas
                  icon="fas fa-envelope"
                  style={{
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: " 8px",
                    borderRadius: "50%",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    width: "50px",
                  }}
                />
                <h2> radix.ge@gmail.com</h2>
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const Contacten = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 900px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 900px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const form = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC1ICqmw5FPn_8bKJCzqduZrnTwZSGlCPE",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_alquulo",
        "template_ifdy3q7",
        form.current,
        "6eHxUfxxTjlUvb2kJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const triggercall = () => {
    const args = {
      number: "  +995558901121", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const triggercall1 = () => {
    const args = {
      number: "+995593937798", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <>
      <div className="email">
        {" "}
        <div className="contact2">
          {matches && (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={15}
              center={center}
            >
              <MarkerF position={center} />
            </GoogleMap>
          )}
          {!matches && (
            <GoogleMap
              mapContainerStyle={mapContainerStylee}
              zoom={15}
              center={center}
            >
              <MarkerF position={center} />
            </GoogleMap>
          )}
        </div>
        <div className="contact1">
          <div
            style={{
              display: "flex",
              margin: "50px",
              marginLeft: "-8%",
              justifyContent: "left",
              flexDirection: "column",
            }}
          >
            <button className="icon" onClick={triggercall}>
              <MDBIcon
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  marginBottom: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: " 5px",
                  borderRadius: "50%",
                  borderStyle: "solid",
                  borderWidth: "3px",
                }}
                className="me-2"
                fas
                icon="phone-volume"
              />
              <h1> +995558901121 </h1>
            </button>
            <button className="icon" onClick={triggercall1}>
              <MDBIcon
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: " 5px",
                  borderRadius: "50%",
                  borderStyle: "solid",
                  borderWidth: "3px",
                }}
                className="me-2"
                fas
                icon="phone-volume"
              />
              <h1> +995593937798</h1>
            </button>
          </div>
          <div
            style={{
              display: "flex",
              margin: "50px",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Link to="https://maps.app.goo.gl/kiq98MSkDNAq5KRy5">
              <button className="icon">
                <MDBIcon
                  className="me-2"
                  fas
                  icon="map-marker-alt"
                  style={{
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: " 8px",
                    borderRadius: "50%",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    width: "50px",
                  }}
                />
                <h2> Pullman Tbilisi Axis Towers </h2>
              </button>{" "}
            </Link>
            <Link to="mailto:radix.ge@gmail.com">
              <button className="icon">
                <MDBIcon
                  className="me-2"
                  fas
                  icon="fas fa-envelope"
                  style={{
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: " 8px",
                    borderRadius: "50%",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    width: "50px",
                  }}
                />
                <h2> radix.ge@gmail.com</h2>
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Contact, Contacten };
