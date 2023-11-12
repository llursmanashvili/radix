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
const mapContainerStyle = {
  width: "45vh",
  height: "30vh",
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const Contact = () => {
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
      number: "  +995 514 00 00 16", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const triggercall1 = () => {
    const args = {
      number: "+995 555 77 78 95", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <>
      <div className="email">
        <div className="contact1">
          <p className="p" style={{ letterSpacing: "2px" }}>
            დაგვიკავშირდით
          </p>
          <button className="icon" onClick={triggercall}>
            <MDBIcon className="me-2" fas icon="mobile" />
            +995514000016
          </button>
          <button className="icon" onClick={triggercall1}>
            <MDBIcon className="me-2" fas icon="mobile" />
            +995555777895
          </button>
          <p
            className="p"
            style={{
              marginTop: "20%",
              letterSpacing: "2px",
            }}
          >
            მოგვწერეთ{" "}
          </p>
          <button className="icon">
            <Link to="mailto:radix.ge@gmail.com">
              <MDBIcon className="me-2" fas icon="fas fa-envelope" />
              radix.ge@gmail.com
            </Link>
          </button>
        </div>
        <div className="contact2">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </div>
      </div>
    </>
  );
};
const Contacten = () => {
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
      number: "  +995 514 00 00 16", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const triggercall1 = () => {
    const args = {
      number: "+995 555 77 78 95", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <>
      <div className="email">
        <div className="contact1">
          <p className="p" style={{ letterSpacing: "2px" }}>
            Phone:
          </p>
          <button className="icon" onClick={triggercall}>
            <MDBIcon className="me-2" fas icon="mobile" />
            +995514000016
          </button>
          <button className="icon" onClick={triggercall1}>
            <MDBIcon className="me-2" fas icon="mobile" />
            +995555777895
          </button>
          <p
            className="p"
            style={{
              marginTop: "20%",
              letterSpacing: "2px",
            }}
          >
            Email:
          </p>
          <button className="icon">
            <Link to="mailto:radix.ge@gmail.com">
              <MDBIcon className="me-2" fas icon="fas fa-envelope" />
              radix.ge@gmail.com
            </Link>
          </button>
        </div>
        <div className="contact2">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </div>
      </div>
    </>
  );
};

export { Contact, Contacten };
