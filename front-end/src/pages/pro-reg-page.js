<<<<<<< HEAD
import React, { Component } from "react";
import Navbar from "../components/navbarNew";
import Footer from "../components/footer";
import Provisionalregister from "../components/provisionalRegister";
=======
import React, { Component } from 'react';
import ResponsiveAppBar from '../components/navbarNew';
import Footer from '../components/footer';
import Provisionalregister from '../components/provisionalRegister'
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8

// Class for render page => Registration for registered students
// Component used => Navbar / ProvisionalRegister / Footer

const ProRegPage = () => {
  return (
    <div>
      <Navbar />

<<<<<<< HEAD
      <div style={{ marginTop: "70px" }}>
        <Provisionalregister />
      </div>
=======
                <ResponsiveAppBar/>
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8

      <Footer />
    </div>
  );
};

export default ProRegPage;
