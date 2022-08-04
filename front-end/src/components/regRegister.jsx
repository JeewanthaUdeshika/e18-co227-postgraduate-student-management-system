/**
 * E / 18 / 173
 * Author - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Date - 02/08/2022
 */

import React, { useState } from "react";
// import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const RegRegister = () => {
  // Variable to store the basic Info coming from the previous page
  let finalDetails = {};

  // get the previous basic Info
  const { state /*, location*/ } = useLocation();

  const [regDetails, setregDetails] = useState({
    registrationNumber: "",
    dateOfRegistration: "",
    degreeSelect: "",
    modeOfStudy: "",
    supervisors: "",
    researchArea: "",
    yearOfCompletion: "",
    progressLevel: "",
    progressDate: "",
    // profilePicture: "",
    url: "",
  });

  // Submit Event
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Merge the objects
      finalDetails = { ...state, ...regDetails };

      console.log(finalDetails);
      // Send the application data to the backend
      const res = await axios({
        method: "POST",
        url: "http://localhost:3001/user/signup",
        headers: { "Content-Type": "multipart/form-data" },
        data: finalDetails,
        withCredentials: true,
      });

      // log the result
      console.log(res);

      // alert the user that submission completed
      // alert("Application Submitted Successfully!");
      toast.success("Application Submitted Successfully!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      // alert("Application Submission Failed!");
      // if there is an error alert the user
      console.log(err.response.data);
      // Show the toast error
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Set the state whenever one of the inputs changes
  const handleChange = (e) => {
    setregDetails({ ...regDetails, [e.target.name]: e.target.value });
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form className="row g-3" required onSubmit={(e) => handleSubmit(e)}>
        <h1
          style={{
            fontSize: "35px",
            fontWeight: "bolder",
            fontFamily: "monospace",
          }}
        >
          Registration for Registered Students
        </h1>

        <div className="col-md-6">
          <label
            htmlFor="regNo"
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Registration Number
          </label>
          <input
            type="text"
            className={
              regDetails.registrationNumber !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            name="registrationNumber"
            onChange={(e) => handleChange(e)}
            id="regNo"
            placeholder="Registration Number"
            required
          />
        </div>

        <div className="col-md-6">
          <label
            htmlFor="regNo"
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Date of Registration
          </label>
          <input
            // type="text"
            type="date"
            className={
              regDetails.dateOfRegistration !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="regNo"
            name="dateOfRegistration"
            onChange={(e) => handleChange(e)}
            placeholder="Date of Registration"
            required
          />
        </div>

        <fieldset className="row mb-3" style={{ marginTop: "20px" }}>
          <legend
            className="schedular-border"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Degree
          </legend>

          <div className="col-sm-10" style={{ marginLeft: "50px" }}>
            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="degreeSelect"
                id="degree1"
                value="phd"
                required
              />
              <label className="form-check-label" htmlFor="degree1">
                PhD
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="degreeSelect"
                id="degree2"
                value="mphill"
              />
              <label className="form-check-label" htmlFor="degree2">
                MPhill
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="degreeSelect"
                id="degree3"
                value="msc"
              />
              <label className="form-check-label" htmlFor="degree3">
                MSc
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="degreeSelect"
                id="degree4"
                value="meng"
              />
              <label className="form-check-label" htmlFor="degree4">
                MEng
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="degreeSelect"
                id="degree5"
                value="provisional"
              />
              <label className="form-check-label" htmlFor="degree5">
                Provisional
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="degreeSelect"
                id="degree6"
                value="other"
              />
              <label className="form-check-label" htmlFor="degree6">
                Other
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className="row-mb-3" style={{ marginTop: "20px" }}>
          <legend
            className="schedular-border"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Mode of Study
          </legend>

          <div className="col-sm-10" style={{ marginLeft: "50px" }}>
            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="modeOfStudy"
                id="mos1"
                value="fullTime"
                required
              />
              <label className="form-check-label" htmlFor="mos1">
                Full Time
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="modeOfStudy"
                id="mos2"
                value="partTime"
              />
              <label className="form-check-label" htmlFor="mos2">
                Part Time
              </label>
            </div>
          </div>
        </fieldset>

        <div className="col-12" style={{ marginTop: "20px" }}>
          <label
            htmlFor="supervisors"
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Supervisors
          </label>
          <input
            type="text"
            className={
              regDetails.supervisors !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="supervisors"
            name="supervisors"
            placeholder="Supervsiors' Name"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div className="col-12">
          <label
            htmlFor="researchArea"
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Research Area
          </label>
          <input
            type="text"
            className={
              regDetails.researchArea !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="researchArea"
            name="researchArea"
            onChange={(e) => handleChange(e)}
            placeholder="Research Area"
            required
          />
        </div>

        <div className="col-12">
          <label
            htmlFor="expectedEndDate"
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Year of Expected Completion
          </label>
          <input
            // type="text"
            type="month"
            onChange={(e) => handleChange(e)}
            className={
              regDetails.yearOfCompletion !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            name="yearOfCompletion"
            id="expectedEndDate"
            placeholder="YYYY/MM/DD"
            required
          />
        </div>

        <fieldset className="row mb-3" style={{ marginTop: "20px" }}>
          <legend
            className="schedular-border"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Progress Level
          </legend>

          <div className="col-sm-10" style={{ marginLeft: "50px" }}>
            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="progressLevel"
                id="progressLevel1"
                value="halfYearReportSubmitted"
                required
              />
              <label className="form-check-label" htmlFor="progressLevel1">
                Half Year Progress Report Submitted
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="progressLevel"
                id="progressLevel2"
                value="annualProgressReportSubmitted"
              />
              <label className="form-check-label" htmlFor="progressLevel2">
                Annual Progress Report Submitted
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="progressLevel"
                id="dprogressLevel3"
                value="annualOralPresentationSubmitted"
              />
              <label className="form-check-label" htmlFor="progressLevel3">
                Annual Oral Presentation Submitted
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="progressLevel"
                id="dprogressLevel4"
                value="vivaCompleted"
              />
              <label className="form-check-label" htmlFor="progressLevel4">
                Viva Completed
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="progressLevel"
                id="progressLevel5"
                value="thesisSubmittedForReview"
              />
              <label className="form-check-label" htmlFor="progressLevel5">
                Thesis Submitted for Review
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="progressLevel"
                id="progressLevel6"
                value="finalThesisSubmitted"
              />
              <label className="form-check-label" htmlFor="progressLevel6">
                Final Thesis Submitted
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="progressLevel"
                id="progressLevel7"
                value="other"
              />
              <label className="form-check-label" htmlFor="progressLevel7">
                Other
              </label>
            </div>
          </div>
        </fieldset>

        <div className="col-12">
          <label
            htmlFor="lastSubmittedDate"
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Progress Level (Date of Last Submission)
          </label>
          <input
            // type="text"
            type="date"
            onChange={(e) => handleChange(e)}
            name="progressDate"
            className={
              regDetails.progressDate !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="lastSubmittedDate"
            placeholder="YYYY/MM/DD"
            required
          />
        </div>

        {/* <div className="col-12">
          <label
            htmlFor="profilePicture"
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Profile Picture
          </label>
          <input
            className={
              regDetails.profilePicture !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            type="file"
            name="profilePicture"
            id="profilePicture"
            required
            onChange={(e) => handleChange(e)}
          />
        </div> */}

        <div className="col-12" style={{ marginTop: "20px" }}>
          <label
            htmlFor="urls"
            className="form-label"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            URL to Preffered Websites <br></br>
            <span style={{ fontSize: "15px", fontWeight: "lighter" }}>
              (GitHub, LinkedIn, ResearchGate)
            </span>
          </label>
          <input
            // type="text"
            type="url"
            className={
              regDetails.url !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="url"
            required
            onChange={(e) => handleChange(e)}
            name="url"
            pattern="https://.*"
            placeholder="https://example.com"
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            // onClick={(e) => handleClick(e)}
          >
            Register
          </button>
          <ToastContainer />
        </div>
      </form>
    </main>
  );
};

export default RegRegister;
