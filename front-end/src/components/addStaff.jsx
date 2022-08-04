/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C.Ranasinghe
 * Last Modified - 04 / 08 / 2022
 */
import {
  Card,
  CardContent,
  OutlinedInput,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

function AddStaff() {
  const [state, setState] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3001/admin/addStaff",
        data: state,
        withCredentials: true,
      });

      console.log(res);
      // alert("Application Submitted Successfully!");
      toast.success("Submitted Successfully!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
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
  // console.log(state);

  return (
    <main className="form-signin">
      <form style={{ width: "1000px" }} onSubmit={(e) => handleSubmit(e)}>
        {/* <CardContent> */}
        <div className="text-center">
          <h1
            style={{
              fontWeight: "lighter",
            }}
          >
            Add Staff Member
          </h1>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3
            style={{
              fontWeight: "lighter",
              marginBottom: "15px",
            }}
          >
            Name of the Staff Member
          </h3>

          {/* <TextField
          id="outlined-basic"
          label="Name of the Staff Member"
          variant="outlined"
          name="name"
          required
          onChange={(e) => handleInput(e)}
          style={{ width: "400px" }}
        /> */}
          <div className="col-md-6">
            <input
              type="text"
              className={
                state.name !== ""
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              name="name"
              onChange={(e) => handleInput(e)}
              id="name"
              placeholder="someone"
              required
            />
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3
            style={{
              fontWeight: "lighter",
              marginBottom: "15px",
            }}
          >
            E-Mail Address of the Staff Member
          </h3>

          {/* <TextField
          id="outlined-basic"
          label="E-Mail of the Staff Member"
          name="email"
          required
          onChange={(e) => handleInput(e)}
          variant="outlined"
          style={{ width: "400px" }}
        /> */}
          <div className="col-md-6">
            <input
              type="email"
              className={
                state.email !== ""
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              name="email"
              onChange={(e) => handleInput(e)}
              id="email"
              placeholder="someone@someone.com"
              required
            />
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3
            style={{
              fontWeight: "lighter",
              marginBottom: "15px",
            }}
          >
            Select Role
          </h3>

          <div
            style={{ marginLeft: "25px" }}
            className="form-check"
            onChange={(e) => handleInput(e)}
          >
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="admin"
              value="admin"
              required
            />
            <label className="form-check-label">Admin</label>
          </div>

          <div
            style={{ marginLeft: "25px" }}
            className="form-check"
            onChange={(e) => handleInput(e)}
          >
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="examiner"
              value="examiner"
            />
            <label className="form-check-label">Examiner</label>
          </div>

          <div
            style={{ marginLeft: "25px" }}
            className="form-check"
            onChange={(e) => handleInput(e)}
          >
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="supervisor"
              value="supervisor"
            />
            <label className="form-check-label">Supervisor</label>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <ToastContainer />
        </div>

        {/* </CardContent> */}
      </form>
    </main>
  );
}

export default AddStaff;
