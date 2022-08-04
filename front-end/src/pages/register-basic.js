/**
 * E / 18 / 173
 * Authors - Kasthuripitiya K.A.I.M. , S.M.T.S.C. Ranasinghe
 * Last Modified - 03/08/2022
 */
import React from "react";
import Footer from "../components/footer";
<<<<<<< HEAD
import Navbar from "../components/navbarNew";
=======
import ResponsiveAppBar from '../components/navbarNew';
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8
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

<<<<<<< HEAD
      <Footer />
    </div>
  );
};
=======
    state = {  } 
    render() { 
        return (
            <div>
                <ResponsiveAppBar/>
>>>>>>> d976f636070c61b98f409ec93d32414559d85fc8

export default RegisterBasic;
