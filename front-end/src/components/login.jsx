<<<<<<< HEAD
import React, { Component } from 'react';   // Import React
import login from '../images/login.png';    // Import Login image
import GoogleButton from 'react-google-button'  // Import Google Sign in button

=======
import React, { useState } from "react"; // Import React
import login from "../images/login.png"; // Import Login image
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
>>>>>>> fa4f0d98ff1a6aa138c26ff519bfd40b81eb5d3b

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
        method: "POST",
        url: `http://localhost:3001/user/login`,
        data: {
          email,
          password,
        },
        withCredentials: true,
      });

      // const token = res.data.token;
      // console.log(token);

<<<<<<< HEAD

                <div class="form-floating">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
            
                <div class="checkbox mb-3" style={{alignItems: 'center', marginTop:'10px'}}>
                  <label>
                    <input type="checkbox" value="remember-me"/>
                    &nbsp; Remember me
                  </label>
                </div>

                

                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                <div className='text-center' style={{marginTop: '15px', marginBottom: '15px', marginLeft: '40px'}}>
                  <GoogleButton width="500"/>
                </div>


                <div class="text-center" style={{marginTop: '30px'}}>
                  <p> Not Registered ? <a href='#'>Register</a></p>
                </div>

              </form>
            </main> 
          </body>
          
        );
=======
      alert("logged in successfully!!");
      navigate("/profile");
    } catch (err) {
      alert("login failed");
      navigate("/register");
>>>>>>> fa4f0d98ff1a6aa138c26ff519bfd40b81eb5d3b
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
