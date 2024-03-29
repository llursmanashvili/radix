import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import logo from "./logo.png";
import About from "../aboutus/about";
import { FlatTree } from "framer-motion";
import program from "./program.pdf";
import programen from "./programeng.pdf";

function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [navSize, setnavSize] = useState("9rem");
  const [navColor, setnavColor] = useState("white");
  const [navColors, setnavColors] = useState("#2c5194");
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const handleClick = () => {
    // Toggle the state value using setOpenBasic
    setOpenBasic(!openBasic);

    // Your logic for opening the program
    window.open(program);

    // Additional logic goes here
  };
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#2c5194") : setnavColor("white");
    window.scrollY > 10 ? setnavColors("white") : setnavColors("#2c5194");

    window.scrollY > 10 ? setnavSize("8rem") : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <MDBNavbar
        style={{
          position: "fixed",
          zIndex: "1",
          marginBottom: "200px",
          width: "100%",
          backgroundColor: navColor,
          transition: "all 1s",
        }}
        expand="lg"
        light
      >
        <MDBContainer fluid>
          <MDBNavbarBrand>
            {" "}
            <Link to="/" onClick={() => setOpenBasic(!openBasic)}>
              <img
                style={{
                  borderRadius: "10px",
                  width: "100px",
                }}
                src={logo}
              />
            </Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav style={{ display: "flex", justifyContent: "right" }}>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    style={{
                      color: navColors,
                      fontSize: "125%",
                      marginRight: "10px",
                    }}
                    tag="a"
                    className="nav-link"
                    role="button"
                  >
                    <Link
                      style={{ color: navColors, textDecoration: "inherit" }}
                      to="/aboutus"
                      onClick={() => setOpenBasic(!openBasic)}
                    >
                      ჩვენ შესახებ
                    </Link>
                  </MDBDropdownToggle>

                  <MDBDropdownMenu>
                    <Link
                      to="/structure"
                      onClick={() => setOpenBasic(!openBasic)}
                    >
                      <MDBDropdownItem
                        style={{
                          color: "white",
                          fontSize: "125%",
                        }}
                        link
                      >
                        სტრუქტურა
                      </MDBDropdownItem>
                    </Link>
                    <MDBDropdownItem
                      style={{
                        color: "white",
                        fontSize: "125%",
                      }}
                      link
                    >
                      <Link to="http://radix.ge/honorary-members/ ">
                        საპატიო წევრები
                      </Link>
                    </MDBDropdownItem>

                    <MDBDropdownItem
                      style={{
                        color: "white",
                        fontSize: "125%",
                      }}
                      link
                    >
                      <Link to="http://radix.ge/speakers/">
                        კონგრესის ისტორია
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                >
                  <Link
                    style={{ color: navColors, textDecoration: "inherit" }}
                    onClick={handleClick}
                    target="_blank"
                  >
                    პროგრამა
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                >
                  <Link
                    style={{ color: navColors, textDecoration: "inherit" }}
                    to="/speakers"
                    onClick={() => setOpenBasic(!openBasic)}
                  >
                    სპიკერები
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                >
                  <Link
                    style={{ color: navColors, textDecoration: "inherit" }}
                    to="/registration"
                    onClick={() => setOpenBasic(!openBasic)}
                  >
                    რეგისტრაცია
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                >
                  <Link
                    style={{ color: navColors, textDecoration: "inherit" }}
                    to="/contact"
                    onClick={() => setOpenBasic(!openBasic)}
                  >
                    კონტაქტი
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>{" "}
              <MDBNavbarItem>
                <Link to="/en" onClick={() => setOpenBasic(!openBasic)}>
                  <MDBNavbarLink
                    style={{
                      color: "white",
                      fontSize: "125%",
                    }}
                  >
                    🇺🇸
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

function Navbaren() {
  const [openBasic, setOpenBasic] = useState(false);
  const [navColor, setnavColor] = useState("white");
  const [navColors, setnavColors] = useState("#2c5194");
  const handleClick = () => {
    // Toggle the state value using setOpenBasic
    setOpenBasic(!openBasic);

    // Your logic for opening the program
    window.open(programen);

    // Additional logic goes here
  };
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#2c5194") : setnavColor("white");
    window.scrollY > 10 ? setnavColors("white") : setnavColors("#2c5194");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <MDBNavbar
        style={{
          position: "fixed",
          zIndex: "1",
          width: "100%",
          backgroundColor: navColor,
          transition: "all 1s",
        }}
        expand="lg"
        light
      >
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <Link to="/en" onClick={() => setOpenBasic(!openBasic)}>
              <img
                style={{
                  borderRadius: "10px",
                  width: "100px",
                }}
                src={logo}
              />{" "}
            </Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav style={{ display: "flex", justifyContent: "right" }}>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    style={{
                      color: navColors,
                      fontSize: "125%",
                      marginRight: "10px",
                    }}
                    tag="a"
                    className="nav-link"
                    role="button"
                  >
                    <Link
                      style={{ color: navColors, textDecoration: "inherit" }}
                      to="/aboutusen"
                      onClick={() => setOpenBasic(!openBasic)}
                    >
                      About Us
                    </Link>
                  </MDBDropdownToggle>

                  <MDBDropdownMenu style={{ inset: "30% auto auto 25%" }}>
                    <Link
                      to="/structureen"
                      onClick={() => setOpenBasic(!openBasic)}
                    >
                      <MDBDropdownItem
                        style={{
                          color: "white",
                          fontSize: "125%",
                        }}
                        link
                      >
                        Structure
                      </MDBDropdownItem>
                    </Link>
                    <MDBDropdownItem
                      style={{
                        color: "white",
                        fontSize: "125%",
                      }}
                      link
                    >
                      <Link to="http://radix.ge/honorary-members/ ">
                        Honorary Members
                      </Link>
                    </MDBDropdownItem>

                    <MDBDropdownItem
                      style={{
                        color: "white",
                        fontSize: "125%",
                      }}
                      link
                    >
                      <Link to="http://radix.ge/speakers/">
                        Congress History
                      </Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                >
                  <Link
                    style={{ color: navColors, textDecoration: "inherit" }}
                    onClick={handleClick}
                    target="_blank"
                  >
                    Program
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                >
                  <Link
                    style={{ color: navColors, textDecoration: "inherit" }}
                    to="/speakeren"
                    onClick={() => setOpenBasic(!openBasic)}
                  >
                    Speakers
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                >
                  <Link
                    style={{ color: navColors, textDecoration: "inherit" }}
                    to="/registrationen"
                    onClick={() => setOpenBasic(!openBasic)}
                  >
                    Registration
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  style={{
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                >
                  <Link
                    style={{ color: navColors, textDecoration: "inherit" }}
                    to="/contacten"
                    onClick={() => setOpenBasic(!openBasic)}
                  >
                    Contact
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/" onClick={() => setOpenBasic(!openBasic)}>
                  <MDBNavbarLink
                    style={{
                      color: "white",
                      fontSize: "125%",
                    }}
                  >
                    🇬🇪
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export { Navbar, Navbaren };
