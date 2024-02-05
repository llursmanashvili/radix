import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { info, info1, infoen, info1en } from "./data";

import { Link } from "react-router-dom";
export function Speakers() {
  return (
    <>
      <h1 style={{ paddingTop: "10%" }}>სექციის ხელმძღვანელები</h1>

      <div style={{ paddingTop: "2%" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {info.map((speaker, i) => {
            return (
              <MDBContainer style={{ width: "350px" }}>
                <MDBRow>
                  <MDBCol>
                    <MDBCard style={{ borderRadius: "15px" }}>
                      <MDBCardBody className="text-center">
                        <div className="mt-3 mb-4">
                          <MDBCardImage
                            src={speaker.image}
                            fluid
                            style={{
                              borderRadius: "10px",
                              width: "300px",
                              height: "250px",
                            }}
                          />
                        </div>
                        <MDBTypography tag="h4">{speaker.title}</MDBTypography>

                        <Link key={1} to={`/speakers/${speaker.link}`}>
                          <MDBBtn className="mt-4 pb-2" rounded size="lg">
                            იხილეთ მეტი
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            );
          })}{" "}
        </div>
      </div>
      <h1 style={{ paddingTop: "10%" }}>სპიკერები</h1>
      <div style={{ paddingTop: "2%" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {info1.map((speaker, i) => {
            return (
              <MDBContainer style={{ width: "350px" }}>
                <MDBRow>
                  <MDBCol>
                    <MDBCard style={{ borderRadius: "15px" }}>
                      <MDBCardBody className="text-center">
                        <div className="mt-3 mb-4">
                          <MDBCardImage
                            src={speaker.image}
                            fluid
                            style={{
                              borderRadius: "10px",
                              width: "300px",
                              height: "250px",
                            }}
                          />
                        </div>
                        <MDBTypography tag="h4">{speaker.title}</MDBTypography>

                        <div className="mb-4 pb-2">
                          <MDBBtn outline floating>
                            <MDBIcon fab icon="facebook" size="lg" />
                          </MDBBtn>
                          <MDBBtn outline floating className="mx-1">
                            <MDBIcon fab icon="twitter" size="lg" />
                          </MDBBtn>
                        </div>
                        <Link key={1} to={`/speakers/${speaker.link}`}>
                          <MDBBtn rounded size="lg">
                            იხილეთ მეტი
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
}
export function Speakersen() {
  return (
    <>
      <h1 style={{ paddingTop: "10%" }}>Section Heads</h1>

      <div style={{ paddingTop: "2%" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {infoen.map((speaker, i) => {
            return (
              <MDBContainer style={{ width: "350px" }}>
                <MDBRow>
                  <MDBCol>
                    <MDBCard style={{ borderRadius: "15px" }}>
                      <MDBCardBody className="text-center">
                        <div className="mt-3 mb-4">
                          <MDBCardImage
                            src={speaker.image}
                            fluid
                            style={{
                              borderRadius: "10px",
                              width: "300px",
                              height: "250px",
                            }}
                          />
                        </div>
                        <MDBTypography tag="h4">{speaker.title}</MDBTypography>

                        <Link key={1} to={`/speakeren/${speaker.link}`}>
                          <MDBBtn className="mt-4 pb-2" rounded size="lg">
                            Read More
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            );
          })}{" "}
        </div>
      </div>
      <h1 style={{ paddingTop: "10%" }}>Speakers</h1>
      <div style={{ paddingTop: "2%" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {info1en.map((speaker, i) => {
            return (
              <MDBContainer style={{ width: "350px" }}>
                <MDBRow>
                  <MDBCol>
                    <MDBCard style={{ borderRadius: "15px" }}>
                      <MDBCardBody className="text-center">
                        <div className="mt-3 mb-4">
                          <MDBCardImage
                            src={speaker.image}
                            fluid
                            style={{
                              borderRadius: "10px",
                              width: "300px",
                              height: "250px",
                            }}
                          />
                        </div>
                        <MDBTypography tag="h4">{speaker.title}</MDBTypography>

                        <Link key={1} to={`/speakeren/${speaker.link}`}>
                          <MDBBtn className="mt-4 pb-2" rounded size="lg">
                            Read More
                          </MDBBtn>
                        </Link>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
}
