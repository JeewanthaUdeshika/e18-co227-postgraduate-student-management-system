<<<<<<< HEAD
/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 03/08/2022
 */
=======
import React, { Component } from 'react';
import ResponsiveAppBar from '../components/navbarNew';
import Footer from '../components/footer';
import Login from '../components/login';
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8

import React from "react";
import Navbar from "../components/navbarNew";
import Footer from "../components/footer";
import Login from "../components/login";

const LoginPage = () => {
  return (
    <div className="container">
      <Navbar />

<<<<<<< HEAD
      <div style={{ marginTop: "50px" }}>
        <Login />
      </div>
=======
                <ResponsiveAppBar/>
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8

      <div style={{ marginTop: "-50px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
