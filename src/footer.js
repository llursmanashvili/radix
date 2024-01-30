import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className=" text-center text-white"
      style={{ position: "relative", backgroundColor: "#2c5194" }}
    >
      <MDBContainer className="p-4 ">
        <section className="">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/RADIX.GE"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/SRC_RADIX?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ASRC_RADIX%7Ctwcon%5Es2"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="mailto:radix.ge@gmail.com"
            role="button"
          >
            <MDBIcon fas icon="envelope" />{" "}
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/radixge/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://maps.app.goo.gl/kiq98MSkDNAq5KRy5"
            role="button"
          >
            <MDBIcon fas icon="map-marked-alt" />{" "}
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
