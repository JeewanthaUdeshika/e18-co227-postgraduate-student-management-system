import React, { Component } from "react";
import Navbar from "../components/navbarNew";
import Footer from "../components/footer";
import Provisionalregister from "../components/provisionalRegister";

// Class for render page => Registration for registered students
// Component used => Navbar / ProvisionalRegister / Footer

const ProRegPage = () => {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "70px" }}>
        <Provisionalregister />
      </div>

      <Footer />
    </div>
  );
};

export default ProRegPage;
