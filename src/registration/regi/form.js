import React, { useState, useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";

function Form() {
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    setLoading(true);
    const scriptUrl =
      "https://sheet.best/api/sheets/f6414365-f8f0-443d-b5b3-8a156227da6f";

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        alert("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
      <MDBContainer fluid style={{ paddingTop: "13%" }}>
        <MDBRow className=" align-items-center m-5">
          <MDBCard>
            <MDBCardBody className="px-4">
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registration Form
              </h3>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First Name"
                    size="lg"
                    name="name"
                    id="form1"
                    type="text"
                    required
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last Name"
                    size="lg"
                    id="form2"
                    type="text"
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Birthday"
                    size="lg"
                    id="form3"
                    type="date"
                    name="birthday"
                    required
                  />
                </MDBCol>

                <MDBCol md="6" className="mb-4">
                  <h6 className="fw-bold">What's your status: </h6>
                  <MDBRadio
                    id="inlineRadio1"
                    value="option1"
                    label="Dentist"
                    name="status"
                    inline
                  />
                  <MDBRadio
                    id="inlineRadio2"
                    value="option2"
                    label="Student"
                    name="status"
                    inline
                  />
                  <MDBRadio
                    id="inlineRadio3"
                    value="PhD Student"
                    label="PhD Student"
                    name="status"
                    inline
                  />
                  <MDBRadio
                    id="inlineRadio3"
                    value="Resident"
                    label="Resident"
                    name="status"
                    inline
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    size="lg"
                    id="form4"
                    type="email"
                    name="email"
                    required
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone Number"
                    size="lg"
                    id="form5"
                    name="phone"
                    type="rel"
                    required
                  />
                </MDBCol>
              </MDBRow>

              <MDBBtn className="mb-4" size="lg" type="submit">
                Submit
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default Form;
