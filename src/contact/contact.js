import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
import AOS from "aos";
import "aos/dist/aos.css";

// npm i @emailjs/browser

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const form = useRef();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="email" data-aos="zoom-out">
        <div className="contact1">
          <p className="p" style={{ fontWeight: "bold", letterSpacing: "2px" }}>
            დაგვიკავშირდით
          </p>
          <button className="icon" onClick={triggercall}>
            <MDBIcon className="me-2" fas icon="phone-alt" />
            +995514000016
          </button>
          <button className="icon" onClick={triggercall1}>
            <MDBIcon className="me-2" fas icon="phone-alt" />
            +995555777895
          </button>
          <p
            className="p"
            style={{
              marginTop: "20%",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            მოგვწერეთ{" "}
          </p>
          <button className="icon" onClick={triggercall}>
            <MDBIcon
              className="me-2"
              to="mailto:radix.ge@gmail.com"
              fas
              icon="fas fa-envelope"
            />
            radix.ge@gmail.com
          </button>
        </div>
        <div className="contact2">
          {" "}
          <MDBValidation
            ref={form}
            onSubmit={sendEmail}
            noValidate
            id="form"
            className="text-center"
            style={{ width: "100%", maxWidth: "300px" }}
          >
            <MDBValidationItem invalid feedback="Please provide your name.">
              <MDBInput
                label="Name"
                v-model="name"
                wrapperClass="mb-4"
                required
              />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback="Please provide your email.">
              <MDBInput
                type="email"
                label="Email address"
                v-model="email"
                wrapperClass="mb-4"
                required
              />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback="Please provide mail subject.">
              <MDBInput
                label="Subject"
                v-model="subject"
                wrapperClass="mb-4"
                required
              />
            </MDBValidationItem>

            <MDBValidationItem
              invalid
              feedback="Please provide a message text."
            >
              <MDBTextArea wrapperClass="mb-4" label="Message" required />
            </MDBValidationItem>

            <MDBBtn
              type="submit"
              onClick={() => {
                alert("მესიჯი გაგზავნილია");
              }}
              value="Send"
              color="primary"
              block
              className="my-4"
            >
              Send
            </MDBBtn>
          </MDBValidation>
        </div>
      </div>
    </>
  );
};
const Contacten = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const form = useRef();

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
        (result) => {},
        (error) => {
          alert("error has occured");
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="email" data-aos="zoom-out">
        <div className="contact1">
          <p className="p" style={{ fontWeight: "bold", letterSpacing: "2px" }}>
            Phone:
          </p>
          <button className="icon" onClick={triggercall}>
            <MDBIcon className="me-2" fas icon="phone-alt" />
            +995514000016
          </button>
          <button className="icon" onClick={triggercall1}>
            <MDBIcon className="me-2" fas icon="phone-alt" />
            +995555777895
          </button>
          <p
            className="p"
            style={{
              marginTop: "20%",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            Email:{" "}
          </p>
          <button className="icon" onClick={triggercall}>
            <MDBIcon
              className="me-2"
              to="mailto:radix.ge@gmail.com"
              fas
              icon="fas fa-envelope"
            />
            radix.ge@gmail.com
          </button>
        </div>
        <div className="contact2">
          {" "}
          <MDBValidation
            ref={form}
            onSubmit={sendEmail}
            noValidate
            id="form"
            className="text-center"
            style={{ width: "100%", maxWidth: "300px" }}
          >
            <MDBValidationItem invalid feedback="Please provide your name.">
              <MDBInput
                label="Name"
                v-model="name"
                wrapperClass="mb-4"
                required
              />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback="Please provide your email.">
              <MDBInput
                type="email"
                label="Email address"
                v-model="email"
                wrapperClass="mb-4"
                required
              />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback="Please provide mail subject.">
              <MDBInput
                label="Subject"
                v-model="subject"
                wrapperClass="mb-4"
                required
              />
            </MDBValidationItem>

            <MDBValidationItem
              invalid
              feedback="Please provide a message text."
            >
              <MDBTextArea wrapperClass="mb-4" label="Message" required />
            </MDBValidationItem>

            <MDBBtn
              type="submit"
              onClick={() => {
                alert("Message Sent");
              }}
              value="Send"
              color="primary"
              block
              className="my-4"
            >
              Send
            </MDBBtn>
          </MDBValidation>
        </div>
      </div>
    </>
  );
};
export { Contact, Contacten };
