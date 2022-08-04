import React, { useState } from "react"; // Import React
import "../styles/register.css"; // Import styles of login
import registration from "../images/login.png"; // Import Login image
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  // Inputs of the form
  const navigate = useNavigate();
  // Default basicInfo and passwordClass
  const [passwordClass, setPasswordClass] = useState("form-control");

  const [basicInfo, setbasicInfo] = useState({
    nameWithInitials: "",
    nameDenotedByInitials: "",
    postalAddress: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmedPassword: "",
    registrationStatus: "",
  });

  // Click Event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (basicInfo.password === basicInfo.confirmedPassword) {
      // Remove confirmed password
      delete basicInfo.confirmedPassword;
      // console.log(basicInfo);
      if (basicInfo.registrationStatus === "registered") {
        navigate("/regRegister", {
          state: basicInfo,
        });
      } else if (basicInfo.registrationStatus === "prospective") {
        navigate("/regProspective", {
          state: basicInfo,
        });
      }
    }
  };

  // Check whether the password and confirm password are same
  useEffect(() => {
    if (basicInfo.password || basicInfo.confirmedPassword) {
      if (
        basicInfo.password === basicInfo.confirmedPassword &&
        basicInfo.password.length >= 8 &&
        basicInfo.confirmedPassword.length >= 8
      ) {
        setPasswordClass("form-control is-valid");
      } else {
        setPasswordClass("form-control is-invalid");
      }
    }
  }, [basicInfo]);

  // OnChange function , detects every change in inputs realtime
  const handleChange = (e) => {
    setbasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form className="row g-3" required onSubmit={(e) => handleSubmit(e)}>
        <div className="text-center">
          <img
            className="mb-4"
            src={registration}
            alt=""
            width="70"
            height="70"
          />

          <h1
            className="h3 mb-3 fw-normal"
            style={{
              fontFamily: "monospace",
              fontSize: "40px",
              fontWeight: "bolder",
            }}
          >
            Registration
          </h1>
        </div>

        <div
          className="col-12"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <label htmlFor="nameWithInitials" className="form-label">
            Name With Initials
          </label>
          <input
            type="text"
            className={
              basicInfo.nameWithInitials !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="nameWithinitials"
            name="nameWithInitials"
            onChange={(e) => handleChange(e)}
            placeholder="Name with Initials"
            required
          />
        </div>

        <div
          className="col-12"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <label htmlFor="initials" className="form-label">
            Name Denoted by Initials
          </label>
          <input
            type="text"
            className={
              basicInfo.nameDenotedByInitials !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="nameDenotedByInitials"
            name="nameDenotedByInitials"
            onChange={(e) => handleChange(e)}
            placeholder="Name Denoted by Initials"
            required
          />
        </div>

        <div
          className="col-12"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <label htmlFor="address" className="form-label">
            Postal Address
          </label>
          <input
            type="text"
            className={
              basicInfo.postalAddress !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="postalAddress"
            name="postalAddress"
            onChange={(e) => handleChange(e)}
            placeholder="Postal Address"
            required
          />
        </div>

        <div
          className="col-md-6"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <label htmlFor="email" className="form-label">
            E-Mail Address
          </label>
          <input
            type="email"
            className={
              basicInfo.email !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="email"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="E-Mail Address"
            required
          />
        </div>

        <div
          className="col-md-6"
          style={{ fontSize: "20px", fontWeight: "bold" }}
          // onInput={getContact}
        >
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            // type="text"
            type="tel"
            className={
              basicInfo.contactNumber !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            onChange={(e) => handleChange(e)}
            id="contactNumber"
            name="contactNumber"
            placeholder="Contact Number"
            required
          />
        </div>

        <div
          className="col-md-6"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            // class="form-control"
            className={passwordClass}
            id="password"
            placeholder="Password"
            name="password"
            minLength="8"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div
          className="col-md-6"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <label htmlFor="confirmedPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={passwordClass}
            id="confirmedPassword"
            placeholder="Confirm Password"
            name="confirmedPassword"
            minLength="8"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div style={{ marginTop: "20px", marginBottom: "5px" }}>
          <h1
            style={{
              marginBottom: "10px",
              // fontWeight: "100px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Registration Status
          </h1>

          <div
            className="form-check"
            onChange={(e) => handleChange(e)}
            style={{ marginLeft: "40px" }}
          >
            <input
              type="radio"
              className="form-check-input"
              id="registered"
              value="registered"
              name="registrationStatus"
              required
            />
            <label className="form-check-label" htmlFor="registered">
              Registered Student
            </label>
          </div>

          <div
            className="form-check"
            onChange={(e) => handleChange(e)}
            style={{ marginLeft: "40px" }}
          >
            <input
              type="radio"
              className="form-check-input"
              id="prospective"
              value="prospective"
              name="registrationStatus"
            />
            <label className="form-check-label" htmlFor="prospective">
              Prospective Student
            </label>
          </div>
        </div>

        <div className="text-center">
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Next
          </button>
        </div>
      </form>
    </main>
  );
};
export default Registration;
