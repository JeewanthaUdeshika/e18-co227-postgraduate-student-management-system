/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 03/08/2022
 */

import React from "react";
import NavBarLogin from "../components/navbarLogin";
import Footer from "../components/footer";
import Login from "../components/login";

const LoginPage = () => {
  return (
    <div className="container">
      <NavBarLogin />

      <div style={{ marginTop: "50px" }}>
        <Login />
      </div>

      <div style={{ marginTop: "-50px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
