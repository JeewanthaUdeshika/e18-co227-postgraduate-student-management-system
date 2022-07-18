import React, { useState } from "react"; // Import React
import login from "../images/login.png"; // Import Login image
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

const Login = () => {
  // Navigator
  const navigate = useNavigate();

  const [values, setValues] = useState({ email: "", password: "" });
  // handleChange to detect the changes
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = values;
    // console.log(email, password);
    // console.log(values);
    try {
      const res = await axios({
        // method: "GET",
        method: "POST",
        url: `http://localhost:3001/user/login`,
        // url: "http://localhost:5000/api/v1/users/login",
        data: {
          email,
          password,
        },
        withCredentials: true,
      });

      // const token = res.data.token;
      // console.log(token);

      if (res.data) {
        // navigate("/components/profile");
        alert("logged in successfully!!");
        navigate("/profile");
      }
    } catch (err) {
      alert("login failed");
      navigate("/register");
      console.log(err);
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
            placeholder="Password"
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

        <button
          className="w-100 btn btn-lg btn-primary"
          // onClick={(e) => handleSubmit(e)}
        >
          Sign in
        </button>
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
          <GoogleButton />
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
