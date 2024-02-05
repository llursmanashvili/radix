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
import "./speakers.css";
import { Link } from "react-router-dom";
export function Speakers() {
  return (
    <>
      <h1 className="title">სექციის ხელმძღვანელები</h1>

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
                        <MDBBtn className="mt-4 pb-2" rounded size="lg">
                          იხილეთ მეტი
                        </MDBBtn>
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

                        <MDBBtn className="mt-4 pb-2" rounded size="lg">
                          იხილეთ მეტი
                        </MDBBtn>
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
      <h1 className="title">Section Heads</h1>

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

                        <MDBBtn className="mt-4 pb-2" rounded size="lg">
                          Read More
                        </MDBBtn>
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

                        <MDBBtn className="mt-4 pb-2" rounded size="lg">
                          Read More
                        </MDBBtn>
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
