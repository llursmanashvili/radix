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

function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [navSize, setnavSize] = useState("9rem");
  const [navColor, setnavColor] = useState("white");
  const [navColors, setnavColors] = useState("#2c5194");

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
            <Link to="/">
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
                    >
                      ჩვენ შესახებ
                    </Link>
                  </MDBDropdownToggle>

                  <MDBDropdownMenu>
                    <Link to="/structure">
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
                    to="/contact"
                  >
                    კონტაქტი
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/en">
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
            <Link to="/en">
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
                    >
                      About Us
                    </Link>
                  </MDBDropdownToggle>

                  <MDBDropdownMenu style={{ inset: "30% auto auto 25%" }}>
                    <Link to="/structureen">
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
                    to="/contacten"
                  >
                    Contact
                  </Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to="/">
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
