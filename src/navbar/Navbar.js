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
import { FlatTree } from "framer-motion";

function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [navSize, setnavSize] = useState("9rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#2c5194") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("8rem") : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <MDBNavbar
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: navColor,
        transition: "all 1s",
      }}
      expand="lg"
      light
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            style={{
              borderRadius: "10px",
            }}
            src={logo}
          />
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
                    color: "white",
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                  tag="a"
                  className="nav-link"
                  role="button"
                >
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="http://radix.ge/about-radix/ "
                  >
                    ჩვენ შესახებ
                  </Link>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
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
                    <Link to="http://radix.ge/government/">სტრუქტურა</Link>
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
                  style={{ color: "white", textDecoration: "inherit" }}
                  to="http://radix.ge/contact/"
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
  );
}
function Navbaren() {
  const [openBasic, setOpenBasic] = useState(false);
  const [navSize, setnavSize] = useState("9rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#2c5194") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("8rem") : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <MDBNavbar
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: navColor,
        transition: "all 1s",
      }}
      expand="lg"
      light
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            style={{
              borderRadius: "10px",
            }}
            src={logo}
          />
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
                    color: "white",
                    fontSize: "125%",
                    marginRight: "10px",
                  }}
                  tag="a"
                  className="nav-link"
                  role="button"
                >
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="http://radix.ge/about-radix/ "
                  >
                    ABOUT US
                  </Link>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem
                    style={{
                      color: "white",
                      fontSize: "125%",
                    }}
                    link
                  >
                    <Link to="http://radix.ge/honorary-members/ ">
                      honorary-members
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    style={{
                      color: "white",
                      fontSize: "125%",
                    }}
                    link
                  >
                    <Link to="http://radix.ge/government/">government</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem
                    style={{
                      color: "white",
                      fontSize: "125%",
                    }}
                    link
                  >
                    <Link to="http://radix.ge/speakers/">CONGRESS HISTORY</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                style={{
                  color: "white",
                  fontSize: "125%",
                  marginRight: "10px",
                }}
              >
                <Link
                  style={{ color: "white", textDecoration: "inherit" }}
                  to="http://radix.ge/contact/"
                >
                  CONTACT
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
  );
}

export { Navbar, Navbaren };
