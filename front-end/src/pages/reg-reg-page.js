<<<<<<< HEAD
/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 03/08/2022
 */
import React from "react";
import Navbar from "../components/navbarNew";
import Footer from "../components/footer";
import RegRegister from "../components/regRegister";
=======
import React, { Component } from 'react';
import ResponsiveAppBar from '../components/navbarNew';
import Footer from '../components/footer';
import RegRegister from '../components/regRegister';
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8

// Class for render page => Registration for registered students
// Component used => Navbar / RegRegister / Footer

const RegisteredRegPage = () => {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "70px" }}>
        <RegRegister />
      </div>

<<<<<<< HEAD
      <Footer />
    </div>
  );
};
=======
    render() { 
        return ( 
            <div>
                <ResponsiveAppBar/>
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8

export default RegisteredRegPage;
