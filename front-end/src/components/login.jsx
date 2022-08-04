/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Date - 02/08/2022
 */

import React, { useState } from "react"; // Import React
import login from "../images/login.png"; // Import Login image
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  // Navigator
  const navigate = useNavigate();

  const [values, setValues] = useState({ email: "", password: "" });

  const loginWithGoogle = async (e) => {
    // e.preventDefault();
    try {
      window.open("http://localhost:3001/auth/google", "_self");
      // navigate("/submission");
    } catch (err) {
      console.log(err);
    }
  };

  // handleChange to detect the changes
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = values;

    try {
      console.log(values);
      const res = await axios({
        method: "post",
        url: `http://localhost:3001/user/login`,
        data: {
          email,
          password,
        },
        withCredentials: true,
      });

      console.log(res);

      toast.success("logged in successfully!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Go to the profile
      navigate("/viewLogged");
    } catch (err) {
      console.log(err);

      // Show the toast error
      toast.error(err.response.data, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // navigate("/register");
    }
  };

  return (
    <div
      className="text-center"
      style={{
        display: "block",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <form
        className="form-signin w-100 m-auto"
        onSubmit={(e) => handleSubmit(e)}
        style={{ maxWidth: "330px", padding: "5px" }}
      >
        <img className="mb-4" src={login} alt="" width="72" height="72" />

        <h1 className="h3 mb-3 fw-normal" style={{ fontFamily: "sans-serif" }}>
          Welcome
        </h1>

        <div className="form-floating" style={{ zIndex: "2" }}>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="E-Mail Address"
            required
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            required
            // placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div
          className="checkbox mb-3"
          style={{ alignItems: "center", marginTop: "10px" }}
        >
          <label>
            <input type="checkbox" value="remember-me" />
            &nbsp; Remember me
          </label>
        </div>
        <div>
          <button className="w-100 btn btn-lg btn-primary">Sign in</button>
          <ToastContainer />
        </div>
        <div
          className="text-center"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <label style={{ fontSize: "17px", fontWeight: "bold" }}>
            Staff Member ?
          </label>
        </div>
        <div
          className="text-center"
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            marginLeft: "40px",
          }}
        >
          <GoogleButton onClick={(e) => loginWithGoogle(e)} />
        </div>

        <div className="text-center" style={{ marginTop: "30px" }}>
          <p>
            {" "}
            Not Registered ? <a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
