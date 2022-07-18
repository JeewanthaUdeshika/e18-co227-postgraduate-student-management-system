import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProvisionalRegister = () => {
  let finalDetails = {};
  // get the previous basic Info
  const { state /*, location*/ } = useLocation();

  // Get variables to State of the insatnce
  const [prospectiveDetails, setProspectiveDetails] = useState({
    researchArea: "",
    researchProgram: "",
    supervisors: "",
    attachments: "",
    // userData: null,
  });

  // Submit Event
  const handleSubmit = async (e) => {
    // Merge the objects
    e.preventDefault();
    try {
      finalDetails = { ...state, ...prospectiveDetails };
      const res = await axios({
        method: "POST",
        url: "http://localhost:3001/sub",
        data: finalDetails,
        withCredentials: true,
      });

      // log the result
      console.log(res);

      // alert the user that submission completed
      alert("Application Submitted Successfully!");
    } catch (err) {
      // if there is an error alert the user
      alert("Application Submission Failed!");
    }
  };

  // Set the state whenever one of the inputs changes
  const handleChange = (e) => {
    setProspectiveDetails({
      ...prospectiveDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
        <h1
          style={{
            fontSize: "35px",
            fontWeight: "bolder",
            fontFamily: "monospace",
          }}
        >
          Registration for Provisional Students
        </h1>

        <div
          className="col-12"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <label htmlFor="researchArea" className="form-label">
            Intended Research Area
          </label>
          <input
            type="text"
            className={
              prospectiveDetails.researchArea !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="researchArea"
            name="researchArea"
            onChange={(e) => handleChange(e)}
            placeholder="Intended Research Area"
            required
          />
        </div>

        <fieldset className="row-mb-3" style={{ marginTop: "20px" }}>
          <legend
            className="schedular-border"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            Research Program Applying
          </legend>

          <div
            className="col-sm-10"
            style={{ marginLeft: "50px", fontSize: "15px" }}
          >
            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="researchProgram"
                id="rp1"
                value="phd"
                required
              />
              <label className="form-check-label" htmlFor="rp1">
                PhD
              </label>
            </div>

            <div className="form-check" onChange={(e) => handleChange(e)}>
              <input
                className="form-check-input"
                type="radio"
                name="researchProgram"
                id="rp2"
                value="mphill"
              />
              <label className="form-check-label" htmlFor="rp2">
                MPhill
              </label>
            </div>
          </div>
        </fieldset>

        <div
          className="col-12"
          style={{ marginTop: "25px", fontSize: "20px", fontWeight: "bold" }}
        >
          <label htmlFor="prospective Supervisors" className="form-label">
            Prospective Supervisor/s for Your Project<br></br>
            <span>
              <a
                href="https://people.ce.pdn.ac.lk/staff/academic/"
                style={{ fontWeight: "lighter" }}
              >
                Find Here
              </a>
            </span>
          </label>
          <input
            type="text"
            className={
              prospectiveDetails.supervisors !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            id="prospectiveSupervisors"
            name="supervisors"
            onChange={(e) => handleChange(e)}
            placeholder="Prospective Supervisor/s"
            required
          />
        </div>

        <div className="col-12" style={{ marginTop: "25px" }}>
          <label
            htmlFor="attachments"
            className="form-label"
            style={{
              fontSize: "20px",
              lineHeight: "15px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Attachments<br></br>
            <br></br>
            <span style={{ fontSize: "15px", fontWeight: "lighter" }}>
              Academic CV, Transcripts, Pubications, Research Propsal/s and
              other Documents (ZIP format Only)
            </span>
          </label>
          <input
            className={
              prospectiveDetails.attachments !== ""
                ? "form-control is-valid"
                : "form-control is-invalid"
            }
            type="file"
            name="attachments"
            onChange={(e) => handleChange(e)}
            id="attachments"
            required
            multiple
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
        </div>
      </form>
    </main>
  );
};

export default ProvisionalRegister;
