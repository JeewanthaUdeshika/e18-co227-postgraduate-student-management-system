/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 03/08/2022
 */
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbarNew";
import Registration from "../components/register";

// Class for render page => Basic registration Page
// Component used => Navbar / ProvisionalRegister / Footer

const RegisterBasic = () => {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "30px" }}>
        <Registration />
      </div>

      <Footer />
    </div>
  );
};

export default RegisterBasic;
