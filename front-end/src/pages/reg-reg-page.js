/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 03/08/2022
 */
import React from "react";
import Navbar from "../components/navbarNew";
import Footer from "../components/footer";
import RegRegister from "../components/regRegister";

// Class for render page => Registration for registered students
// Component used => Navbar / RegRegister / Footer

const RegisteredRegPage = () => {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "70px" }}>
        <RegRegister />
      </div>

      <Footer />
    </div>
  );
};

export default RegisteredRegPage;
